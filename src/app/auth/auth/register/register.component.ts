import { Component } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  //registerForm: FormGroup;
  submitted = false;
 
   constructor(private formbuilder: FormBuilder, private fb: FormBuilder,private authService: AuthServiceService,private router: Router){}
  

   userMTO : FormGroup = this.formbuilder.group({
    userVO: this.formbuilder.group({
      Id:[''],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  })
  
   
  createUser(){  
    this.authService.saveUser(this.userMTO.value).subscribe(() =>{
    })   
}

onReset() {
  this.submitted = false;
  this.userMTO.reset();
}
  

}
