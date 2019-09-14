import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Employee} from '../../classes/employee';
import {AdresseEmpl} from '../../classes/AdresseEmpl';
import {EmployesService} from '../../services/employes.service';
import {AdresseEmplService} from '../../services/adresse-empl.service';
import {MatDialogRef} from '@angular/material';
import {AgenceService} from '../../services/agence.service';
import {Agence} from '../../classes/agence';

declare var $: any;

@Component({
  selector: 'app-ajouteremp',
  templateUrl: './ajouteremp.component.html',
  styleUrls: ['./ajouteremp.component.scss']
})
export class AjouterempComponent implements OnInit {

  employee = new Employee ;
  adresse= new AdresseEmpl ;
  AGENCES : Agence[] ;

  constructor(private empservice : EmployesService ,
              private adresseemplservice : AdresseEmplService,
              public dialogRef: MatDialogRef<AjouterempComponent>,
              private agenceservice : AgenceService) { }

  ngOnInit() {
    this.agenceservice.getAgences().subscribe(
        (res)=> this.AGENCES = res
    )
  }

  ajouter(form : NgForm){
    this.employee.numEmployee = this.ID();
    this.employee.login = this.LOGIN()  ;
    this.employee.mdp = this.PASS()  ;
    console.log(this.employee.mdp);


    this.employee.nom = form.value.nom ;
    this.employee.prenom = form.value.prenom ;
    this.employee.cin = form.value.cin ;
    this.employee.commission = form.value.commission ;
    this.employee.salaire = form.value.salaire ;
    this.employee.sexe = form.value.sexe ;
    this.employee.dateNais = form.value.date_naissance ;
    this.employee.fonction = form.value.fonction ;
    this.employee.email = form.value.mail ;
    this.employee.telephone = form.value.tel ;
    this.employee.codeAgence = form.value.agence ;


    this.adresse.numEmployee = this.employee.numEmployee ;
    this.adresse.numAdresse = this.ID();
    this.adresse.etat = 1 ;

    this.adresse.codePostal = form.value.code_postale ;
    this.adresse.quartier = form.value.quartier ;
    this.adresse.ville = form.value.ville ;
    this.adresse.gouvernorat = form.value.gouvernerat;


    this.empservice.postEmployee(this.employee).subscribe(
        () => this.adresseemplservice.postAdresseEmpl(this.adresse).subscribe(
            () =>  this.showNotification('success',"Employé ajouter avec succès.","check_circle_outline"),
            (error) =>  this.showNotification('danger',"Une erreur systéme est survenue lors de l'ajout d'adresse","highlight_off")
        ),
        (error) =>  {this.showNotification('danger',"Une erreur systéme est survenue lors de l'ajout d'employé","highlight_off")
        ,console.log(error)}
    ) ;

    this.dialogRef.close();


  }


  PASS() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  LOGIN() {
    return  Math.random().toString(36).substr(2, 9);
  }

  ID(){
    return (new Date().getTime() + Math.floor((Math.random()*10000)+1))
  }


  showNotification(color,msg,icon){
    $.notify({
      icon: icon,
      message: msg

    },{
      type: color,
      timer: 4000,
      placement: {
        from: 'bottom',
        align:'center'
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">'+icon+'</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
    });
  }
}
