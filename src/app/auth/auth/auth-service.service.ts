import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from 'src/environment';
import { CommonServiceService } from 'src/app/shared/common-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  
  appRoot = environment.BASE_URL;

  private baseUrl = 'http://localhost:8084/auth';

  constructor(private commonservice:CommonServiceService,private http:HttpClient) { }

 

  saveUser(userMTO: any): Observable<any> {  
    return this.http.post(`${this.baseUrl}`+'/signon?action=create', userMTO);  
  }

  loginUser(userMTO: any): Observable<any> {  
    const email = userMTO.email;
    const password = userMTO.password;
    const url = `${this.baseUrl}/gentoken?email=${email}&password=${password}`;
    return this.http.get(url,{ responseType: 'text' });    
  }

  authenticated() :boolean {
    return   localStorage.getItem("jwtToken")!=null;
   }

 
  

  // getUserByEmail(email: string): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  // }
}
