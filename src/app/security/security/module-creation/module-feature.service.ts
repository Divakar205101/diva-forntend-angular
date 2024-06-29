import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';


@Injectable({
  providedIn: 'root'
})
export class ModuleFeatureService {
  
  appRoot = environment.BASE_URL;
  constructor(private http:HttpClient) { 

  }

  getmodulesList(): Observable<any>{
    return this.http.get(`${this.appRoot}`+'/core/getallModules');  
  }

  createModule(student: object): Observable<object> {  
    return this.http.post(`${this.appRoot}`+'/core/savemodule?action=create', student);  
  }  

  getModule(id: number): Observable<Object> {  
    return this.http.get(`${this.appRoot}/getModule?moduleAutoId=/${id}`);  
  }  
  
  updateModule(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.appRoot}/update-student/${id}`, value);  
  }  

}
