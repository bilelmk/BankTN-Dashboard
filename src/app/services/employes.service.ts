import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../classes/employee';

@Injectable({
  providedIn: 'root'
})
  export class EmployesService {

  constructor(private http :HttpClient) { }

  getEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:9999/employee-service/employees') ;
  }

  putEmployee(emp: Employee ,id :number) {
    return this.http.put('http://localhost:9999/employee-service/employees/' + id, emp) ;
  }

  deleteEmployee(id: number) {
    return this.http.delete('http://localhost:9999/employee-service/employees/' + id);
  }

  postEmployee(emp: Employee) {
    return this.http.post('http://localhost:9999/employee-service/employees', emp) ;
  }
}
