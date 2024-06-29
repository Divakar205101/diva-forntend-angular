import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  appRoot = environment.BASE_URL;
 
  constructor(private http:HttpClient) { }

  createUser(userMTO: object){
    return this.http.post(`${this.appRoot}`+'/core/saveUser?action=create', userMTO);  
  }

  getmembersList(): Observable<any>{
    return this.http.get(`${this.appRoot}`+'/core/getmembers');  
  }

  getmemberbyId(memberId : any): Observable<any>{
    return this.http.get(`${this.appRoot}`+'/core/editmember?action=edit&memberId='+memberId);  
  }

}
