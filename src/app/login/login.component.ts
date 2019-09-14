import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';
import { Employee } from 'app/classes/employee';
import { isUndefined } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  employee: Employee;
  invalidLogin: boolean = false;

  constructor(private router:Router, private loginservice: AuthentificationService) {}

  checkLogin() {
    
    this.loginservice.getEmployee(this.username, this.password).subscribe(
      data => {
        this.employee = data;
        if (isUndefined(this.employee) || this.employee === null) {
          this.invalidLogin = true;
          return false;
        } else {
          sessionStorage.setItem('username', this.username);
          sessionStorage.setItem('numero', this.employee.numEmployee.toString());
          sessionStorage.setItem('nom', this.employee.nom);
          sessionStorage.setItem('prenom', this.employee.prenom);
          sessionStorage.setItem('cin', this.employee.cin.toString());
          sessionStorage.setItem('datenais', this.employee.dateNais);
          sessionStorage.setItem('fonction', this.employee.fonction);
          sessionStorage.setItem('mdp', this.employee.mdp);
          sessionStorage.setItem('agence', this.employee.codeAgence.toString());
          sessionStorage.setItem('comm', this.employee.commission.toString());
          sessionStorage.setItem('tel', this.employee.telephone.toString());
          sessionStorage.setItem('sal', this.employee.salaire.toString());
          sessionStorage.setItem('sex', this.employee.sexe);
          sessionStorage.setItem('email', this.employee.email);
          this.router.navigate(['gestionCompte']);
          this.invalidLogin = false;
          return true;
        }
      },
      err => {
        console.log(err);
        this.invalidLogin = true;
        return false;
      }
    );

  }

  ngOnInit() {
    
  }

}
