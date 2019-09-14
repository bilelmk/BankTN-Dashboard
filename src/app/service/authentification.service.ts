import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private httpclient: HttpClient) { }

  getEmployee(username: string, password: string): Observable<any>{

    let headers =  new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    //headers.append('Authorization', 'Basic YWRtaW46enV1bA=='/*'Basic '+btoa("admin:zuul")*/);
    
    return this.httpclient.post("http://localhost:9999/employee-service/employees/login",
    {
      "username": username,
      "password": password
    },
    { headers: headers, withCredentials: true});

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.clear();
  }
}
