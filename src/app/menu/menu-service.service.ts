import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  appRoot = environment.BASE_URL;
  constructor(private http:HttpClient) { }
  getAllModules() : Observable<any>{
    return this.http.get(`${this.appRoot}`+'/core/getallModules');
  }
}
