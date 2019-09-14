import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Agence} from '../classes/agence';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(private http :HttpClient) { }

  getAgences(): Observable<Agence[]>{
    return this.http.get<Agence[]>('http://localhost:9999/agence-service/agences') ;
  }

  deleteAgence(id :number){
    return this.http.delete('http://localhost:9999/agence-service/agences/' + id);
  }
}
