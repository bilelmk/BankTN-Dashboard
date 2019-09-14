import { Injectable } from '@angular/core';
import {Compte} from '../classes/compte';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  constructor(private http :HttpClient) { }

  getCompte(id: number) : Observable<Compte>{
  return this.http.get<Compte>('http://localhost:9999/compte-service/comptes/' + id) ;
}

  postCompte(compte: Compte) {
    return this.http.post('http://localhost:9999/compte-service/comptes', compte) ;
  }
  getCompteByIdClient(id: number) : Observable<Compte[]>{
    return this.http.get<Compte[]>('http://localhost:9999/compte-service/comptes/client/' + id) ;
  }
  deleteCompte(id : number) {
    return this.http.delete('http://localhost:9999/compte-service/comptes/' + id);
  }

}
