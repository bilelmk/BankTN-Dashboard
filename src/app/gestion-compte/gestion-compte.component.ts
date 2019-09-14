import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Client } from '../classes/client';
import { Compte } from '../classes/compte';
import { Adresse } from '../classes/adresse';
import { ClientsService } from '../services/clients.service';
import { AdresseClientService} from '../services/adresse-client.service';
import { ComptesService } from '../services/comptes.service';
import {DetailsclientComponent} from '../gestion-client/detailsclient/detailsclient.component';
import {MatDialog} from '@angular/material';
declare var $: any;

@Component({
  selector: 'app-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrls: ['./gestion-compte.component.scss']
})
export class GestionCompteComponent implements OnInit {
  ExistClientID : number ;
  ExistClient = new Client ;
  ExistClientAdresse = new Adresse ;
  ExistClientCompte : Compte[];


  adresse = new Adresse ;
  compte = new Compte ;
  client  = new Client ;
  client_exist : boolean = false;

  constructor(private clientService : ClientsService,
              private adresseClientService : AdresseClientService,
              private compteService : ComptesService,
              public dialog: MatDialog) { }

  ngOnInit() {
  }


  onSubmit(form : NgForm){
    if(!this.client_exist){
      this.client.numClient = this.ID() ;
      this.client.nom = form.value.nom ;
      this.client.prenom = form.value.prenom ;
      this.client.cin = form.value.cin ;
      this.client.email = form.value.mail ;
      this.client.nature = form.value.nature ;
      this.client.sexe = form.value.sexe ;
      this.client.fonction = form.value.fonction ;
      this.client.dateInscription = new Date() ;
      this.client.dateNais = form.value.date_naissance;
      this.client.codeSecret = this.PASS() ;
      this.client.telephone = form.value.tel ;

      this.adresse.numAdresse = this.ID() ;
      this.adresse.numClient = this.client.numClient ;
      this.adresse.codePostal = form.value.code_postale ;
      this.adresse.ville = form.value.ville ;
      this.adresse.gouvernorat = form.value.gouvernerat ;
      this.adresse.quartier = form.value.quartier ;

      this.compte.numCompte = this.ID() ;
      this.compte.numClient = this.client.numClient ;
      this.compte.dateCreation = new Date() ;
      this.compte.solde = form.value.solde ;
      this.compte.numTypeCompte = form.value.type_compte  ;

      // this.clientService.postClient(this.client).subscribe() ;
      // this.adresseClientService.postAdresse(this.adresse).subscribe();
      // this.compteService.postCompte(this.compte).subscribe() ;


      this.clientService.postClient(this.client).subscribe(
          () => this.adresseClientService.postAdresse(this.adresse).subscribe(
              () => this.compteService.postCompte(this.compte).subscribe(
                  () =>  {
                    this.showNotification('success',"Compte a été ajouté avec succès.","check_circle_outline")
                    form.reset() ;
                  },
                  (error) => {
                    this.showNotification('danger',"Compte n' a pas été ajouté","highlight_off") ;
                    console.log(error)
                  }
              ) ,
              (error1) =>  {
                this.showNotification('danger',"Adresse n'a pas été ajoutée","highlight_off")
                console.log(error1)
              }
          ),
          (error2) => {
            this.showNotification('danger',"Client n'a pas été ajouté","highlight_off")
            console.log(error2)
          }
      ) ;


    }else{

      this.compte.numCompte = this.ID() ;
      this.compte.numClient = this.ExistClient.numClient ;
      this.compte.dateCreation = new Date() ;
      this.compte.solde = form.value.solde ;
      this.compte.numTypeCompte = form.value.type_compte  ;

      this.compteService.postCompte(this.compte).subscribe(
          () => {
            this.showNotification('success',"La modification a été effectuée avec succès.","check_circle_outline")
            form.reset() ;
            this.ExistClientCompte = null ;
          } ,
          (error) =>  this.showNotification('danger',"La modification a été échouée","highlight_off")

        )
    }

  }



  /*** client exist ou non ****/
  exist(){
    this.client_exist = true ;
  }
  notExist(){
    this.client_exist = false ;
  }

  EpargneExist = false ;
  CourantExist = false ;


  getExistClient(){
    this.clientService.getClient(this.ExistClientID).subscribe(
        (response) => {
          this.ExistClient = response,
          this.adresseClientService.getAdresseByClientId(this.ExistClientID).subscribe(
              (response2) =>{
                this.ExistClientAdresse = response2,
                this.compteService.getCompteByIdClient(this.ExistClientID).subscribe(
                    (response3) =>{
                      if(response3.length==2){
                        this.EpargneExist = true;
                        this.CourantExist = true;
                      }
                      else{
                        if(response3[0].numTypeCompte == 1){
                          this.CourantExist = true;
                          this.EpargneExist = false ;

                        }
                        else{
                          this.EpargneExist = true ;
                          this.CourantExist = false;

                        }
                      }
                      this.ExistClientCompte = response3
                      this.showNotification('success',"Client trouvé avec succès.","check_circle_outline")
                    },
                    (error) =>  this.showNotification('danger',"Compte inexistant","highlight_off")
                )
              },
            (error) =>  this.showNotification('danger',"Adresse inexistante","highlight_off")
          )
        },
        (error) =>  this.showNotification('danger',"Client inexistant","highlight_off")
    )
  }

  openDetailsDialog(): void {
    const dialogRef = this.dialog.open(DetailsclientComponent, {
      width: '800px',data: this.ExistClient
    });
  }

  PASS () {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  ID (){
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
