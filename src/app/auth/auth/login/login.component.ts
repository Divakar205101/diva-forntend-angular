import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private formbuilder: FormBuilder, private fb: FormBuilder,private authService: AuthServiceService,private router: Router){}

  userVO : FormGroup = this.formbuilder.group({
      Id:[''],
      email: ['', [Validators.required]],
      password: ['', Validators.required],

  })

  loginUser() {  
    this.authService.loginUser(this.userVO.value).subscribe(
      (token: string) => {
        localStorage.setItem('jwtToken', token);
        this.router.navigate(['/dash-borad']);
      },
      (error: any) => {
        console.error('Error logging in:', error);
      }
    );   
  }
   
}
