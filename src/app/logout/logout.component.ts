import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'app/service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private logoutservice: AuthentificationService) { }

  ngOnInit() {
    this.logoutservice.logOut();
    this.router.navigate(['login']);
  }

}
