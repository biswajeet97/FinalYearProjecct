import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ApiServiceService } from '../service/api-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private api : ApiServiceService) { }
  
  newUser = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
  })
  onSubmit(){
    if(this.newUser.valid){

    this.api.loginUser( { username : this.newUser.value.username, password : this.newUser.value.password }).subscribe((data : any)=>{
      localStorage.setItem('token', data.token)
    }) 
    }
    
  }
  ngOnInit(): void {
  }
  
}
