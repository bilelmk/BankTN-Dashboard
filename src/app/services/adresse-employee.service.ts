import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Adresse} from '../classes/adresse';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdresseEmployeeService {

  constructor(private http :HttpClient) { }


  // getAdresseByClientId(id : number) :Observable<Adresse>{
  //   return this.http.get<Adresse>('http://localhost:9999/adresse-client-service/adresses/client/' + id) ;
  // }
  //
  // postAdresse(adresse: Adresse) {
  //   return this.http.post('http://localhost:9999/adresse-client-service/adresses', adresse) ;
  // }
  //
  // patchAdresse(adresse : Adresse , id :number){
  //   return this.http.patch('http://localhost:9999/adresse-client-service/adresses/' + id ,adresse)
  // }
  // deleteAdresses( id :number) {
  //   return this.http.delete('http://localhost:9999/adresse-client-service/adresses/' + id)
  // }
}
