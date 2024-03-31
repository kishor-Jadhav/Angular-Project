import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any>{
    const url= 'https://reqres.in/api/users?page=1';
    return this.http.get(url)
  }
}
