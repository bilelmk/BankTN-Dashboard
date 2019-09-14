import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdresseEmpl} from '../classes/AdresseEmpl';

@Injectable({
  providedIn: 'root'
})
export class AdresseEmplService {

  constructor(private http:HttpClient) { }

  getAdresseByEmployeeId(id : number) :Observable<AdresseEmpl>{
    return this.http.get<AdresseEmpl>('http://localhost:9999/adresse-employee-service/adresses/employee/' + id) ;
  }

  postAdresseEmpl(adresse: AdresseEmpl) {
    return this.http.post('http://localhost:9999/adresse-employee-service/adresses', adresse) ;
  }

  patchAdresseEmpl(adresse : AdresseEmpl , id :number){
    return this.http.patch('http://localhost:9999/adresse-employee-service/adresses/' + id ,adresse)
  }
  deleteAdressesEmpl( id :number) {
    return this.http.delete('http://localhost:9999/adresse-employee-service/adresses/' + id)
  }
}
