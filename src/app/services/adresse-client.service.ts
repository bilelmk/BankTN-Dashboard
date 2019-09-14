import { Injectable } from '@angular/core';
import { Adresse } from '../classes/adresse';
import { HttpClient } from '@angular/common/http';
import {Client} from '../classes/client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdresseClientService {

  constructor(private http:HttpClient) { }

  getAdresseByClientId(id : number) :Observable<Adresse>{
    return this.http.get<Adresse>('http://localhost:9999/adresse-client-service/adresses/client/' + id) ;
  }

  postAdresse(adresse: Adresse) {
    return this.http.post('http://localhost:9999/adresse-client-service/adresses', adresse) ;
  }

  patchAdresse(adresse : Adresse , id :number){
    return this.http.patch('http://localhost:9999/adresse-client-service/adresses/' + id ,adresse)
  }
  deleteAdresses( id :number) {
    return this.http.delete('http://localhost:9999/adresse-client-service/adresses/' + id)
  }
}
