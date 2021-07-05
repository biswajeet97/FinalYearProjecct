// server
// start a mongodb server at windows = "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="c:\data\db"
// implementing a passport authentication system using session and json web token

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var httpServer = require('http').createServer(app);
var mongoose = require('mongoose');
var cors  = require('cors');
var bcrypt  = require('bcrypt');
var jwt  = require('jsonwebtoken');
var passport  = require('passport');
var strategy  = require('passport-jwt');

// Env options
var {
    PORT=3000,
    DOMAIN='localhost',
    SECRET='secret'
} = process.env;



// websocket server
var io = require('socket.io')(httpServer);
var userM = {}


// database connection
mongoose.connect('mongodb://localhost:27017/loginPro', {useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if (err) throw err
    else {
        console.log('dB connected');
    }
})

// user schema and model

var UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    friends : [String],
    invites : [String],
    status : Boolean,
    inGame : Boolean
})
var User = new mongoose.model('User',UserSchema)



// passport jwt authentication

var jwtStratigy = strategy.Strategy
var extractJwt = strategy.ExtractJwt

var opts = {}
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = SECRET;
passport.use(new jwtStratigy(opts,(payload,done)=>{
    User.findOne({_id : payload._id }, (err,user)=>{
        if (err) {
            return done(err,false);
        }
        else if (user != null){
            return done(null,user);
        }
        else{
            return done(null,false);
        }
    })
}))


// middlewares 
app.use(passport.initialize());
app.use(cors());
app.use(bodyParser.json());




// main page route
// app.use(express.static('public'))

// restricted user route
app.get('/profile',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    res.json({user : req.user, message: 'success', status : 200 });
    next();
})

// show friends list
app.post('/api/friends',(req,res)=>{
    var { username } = req.body
    User.findOne({username : username},(err,result)=>{
        if (err) throw err;
        if(result.friends != undefined){
            res.json({message: 'success', status: 200, friends : result.friends})
        }
        else{
            res.json({message: 'no friends',status:200})
        }
        
    })    
})
// find a user
app.post('/api/findFriend',(req,res)=>{
    var { username } = req.body
    User.findOne({username},(err,result)=>{
        if (err) throw err;
        if(result){
            res.json({message:'success',status:200,username: result.username})
        }
        else{
            res.json({message: 'user not found',status:200})
        }

    })
})

// show invites list

app.post('/api/showInvites',(req,res)=>{
    var { username } = req.body
    User.findOne({username},(err,result)=>{
        if (err) throw err;
        res.json({message:'success',status:200,invites: result.invites})
    })
})

// accept invitations
app.post('/api/acceptInvite',(req,res)=>{
    var { from , to } = req.body;
    User.updateOne({username : from},{$push : {friends :  to} },(err)=>{
        if(err) throw err;
        User.updateOne({username: to},{$push: {friends : from}},(err)=>{
            if (err) throw err;
            User.updateOne({username: to},{$pull:{invites: from}},(err)=>{
                if (err) throw err;
                res.json({message: 'success', status: 200});
            })
            
        })
        
    })
})

// registration port
app.post('/api/register',(req,res)=>{
    var {username, password} = req.body
    var newUser = new User({
        username,
        password
    })
    User.findOne({username: newUser.username},(err,value)=>{
        if (err) throw err
        else{
            if(value === null){
                bcrypt.genSalt(10,(err,salt)=>{
                    if (err) throw err
                    bcrypt.hash(newUser.password,salt,(err,hash)=>{
                        if (err) throw err
                        newUser.password = hash;
                        User.create(newUser,(err)=>{
                            if (err) throw err
                            else{
                                console.log(newUser)
                                res.json({ message :'saved', status : 200});
                            }
                        })
                    })
                })
            }
            else{
                res.json({ message : 'user already exist', status : 400})
            }
        }
    })
    
})
// login port
app.post('/api/login',(req,res) =>{
    var { username, password} = req.body
        var iuser = new User({
            username,
            password
        })
        User.findOne({username : iuser.username},(err,user)=>{
            if (err) throw err
            bcrypt.compare(iuser.password , user.password,(err,same)=>{
                if (err) throw err
                if (same){
                    var token = jwt.sign({_id : user._id},SECRET,{ expiresIn: '100d'})
                    res.json({message : 'login success', status : 200, token : token});
                }
            })
        })
})

// web sockets connections
io.on('connection',(socket)=>{
    socket.on('addUser',(data)=>{
        userM[data.user] = socket.id
    })
    socket.on('message',(data)=>{
        io.to(userM[data.to]).emit('message',{message: data.message, from : data.me, to : data.to})
    })
    socket.on('move',(data)=>{
        io.to(userM[data.user]).emit('move',{move : data.move})
    })
    socket.on('invite',(data)=>{
        User.updateOne({username: data.to},{$push:{invites:data.from}},(err)=>{
            if (err) throw err;
            io.to(userM[data.to]).emit('invite',{from :data.from, to : data.to})
        })
        
    })
    socket.on('challenge',(data)=>{
        io.to(userM[data.to]).emit('challenge',{from :data.from, to : data.to})
    })
    socket.on('accept-game',(data)=>{
        io.to(userM[data.opp]).emit('accept-game',{side : data.oside, me : data.opp, opp: data.me })
    })
})

// http Server listner
httpServer.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
});