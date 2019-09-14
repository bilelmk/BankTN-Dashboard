import { Component, OnInit } from '@angular/core';
import {GestionClientComponent} from '../../gestion-client/gestion-client.component';
import {GestionCompteComponent} from '../../gestion-compte/gestion-compte.component';
import {GestionAgenceComponent} from '../../gestion-agence/gestion-agence.component';
import {GestionEmpComponent} from '../../gestion-emp/gestion-emp.component';
import {GestionOperationComponent} from '../../gestion-operation/gestion-operation.component';
import {RechercheComponent} from '../../recherche/recherche.component';
import {AdminComponent} from '../../admin/admin.component';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    prev : string ;
}
export const ROUTES: RouteInfo[] = [
    { path: '/gestionClient',     title: 'Gestion Clients',    icon: 'supervisor_account', class: '' , prev :''},
    { path: '/gestionCompte',     title: 'Gestion Comptes',    icon: 'account_balance_wallet', class: '',prev :'' },
    { path: '/gestiobOperation',     title: 'Gestion Opérations', icon: 'swap_horiz', class: '',prev :'' },
    { path: '/gestionEmp',        title: 'Gestion Employés',   icon: 'person', class: '' ,prev :'Admin' },
    { path: '/gestionAgence',  title: 'Gestion Agences',    icon: 'home', class: '' ,prev :'Admon' },
    { path: '/dashboard', title: 'Statistiques',  icon: 'timeline', class: '' ,prev :'Admin' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  previlege :string ;

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.previlege = sessionStorage.getItem('fonction') ;
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
