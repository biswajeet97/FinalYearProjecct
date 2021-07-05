import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private api : ApiServiceService) { }
  
  newUser = this.fb.group({
    username: ['',Validators.required],
    password1: ['',Validators.required],
    password2: ['',Validators.required]
  })
  onSubmit(){
    if(this.newUser.valid){
      if(this.newUser.value.password1 == this.newUser.value.password2){
        this.api.registerUser( { username : this.newUser.value.username, password : this.newUser.value.password1 }).subscribe((data)=>{
          console.log(data)
        }) 
      }
      else{
        console.log('error')
      }
    }
    
  }
  ngOnInit(): void {
  }

}
