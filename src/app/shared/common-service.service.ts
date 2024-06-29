import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http: HttpClient) { }
  
  save(apiUrl:any,data: any): Observable<any> {
    return this.http.post<any>(apiUrl, data);
  }

}
