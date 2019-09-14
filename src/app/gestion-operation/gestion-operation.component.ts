import {Component, OnInit, ViewChild} from '@angular/core';
import {Client} from '../classes/client';
import {ClientsService} from '../services/clients.service';
import {AdresseClientService} from '../services/adresse-client.service';
import {ComptesService} from '../services/comptes.service';
import {Adresse} from '../classes/adresse';
import {Compte} from '../classes/compte';
import {NgForm} from '@angular/forms';
import {TransactionSimple} from '../classes/transactionSimple';
import {OprationService} from '../services/opration.service';
import {TransactonVirement} from '../classes/transactonVirement';
import {Operationsimple} from '../classes/operationsimple';
import {Operationvirement} from '../classes/operationvirement';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {DetailsclientComponent} from '../gestion-client/detailsclient/detailsclient.component';

declare var $: any;
const EPARGNE="Epargne" ;
const COURANT="Courant" ;

@Component({
  selector: 'app-gestion-operation',
  templateUrl: './gestion-operation.component.html',
  styleUrls: ['./gestion-operation.component.scss']
})
export class GestionOperationComponent implements OnInit {

    displayedColumns: string[] = ['id' ,'type','compte','rec','date', 'montant' ];
    dataSource :any ;

    @ViewChild(MatPaginator) paginator: MatPaginator;


  Historique : any[] ;

  Virement = true ;
  Debiter = false ;
  Crediter = false ;

  Compte1ID : number ;
  Compte1 : Compte ;
  Compte2ID : number ;
  Compte2 : Compte ;

  operationsimple = new Operationsimple ;
  operationvirement = new Operationvirement ;


  Client = new Client ;
  ClientID :number ;
  ClientAdresse = new Adresse ;
  ClientComptes : Compte[] ;

  data  = new TransactionSimple ;
  virementdata = new TransactonVirement ;


  Client1 : Client ;
  Client2 : Client ;

  constructor(private clientService : ClientsService,
              private adresseClientService : AdresseClientService,
              private compteService : ComptesService,
              private opertaionservice : OprationService,
              public dialog: MatDialog) { }

  ngOnInit() {
      this.Compte1ID = null ;
      this.Compte1 = null  ;
      this.Compte2ID = null ;
      this.Compte2 = null ;
  }

  virement() {
    this.Virement = true;
    this.Crediter = false;
    this.Debiter = false;
  }

  debiter() {
    this.Virement = false;
    this.Crediter = false;
    this.Debiter = true;
  }

  crediter() {
    this.Virement = false;
    this.Crediter = true;
    this.Debiter = false;
  }


  VerifierCompte1(){
    this.compteService.getCompte(this.Compte1ID).subscribe(
        (response3) =>{
          this.Compte1 = response3 ;
            this.clientService.getClient(this.Compte1.numClient).subscribe(

                (resp) => {
                    this.Client1 = new Client ;
                    this.Client1 = resp ;
                }
            );
          this.showNotification('success',"Client trouvé avec succès.","check_circle_outline")
        },
        (error) =>  this.showNotification('danger',"Compte n'existe pas","highlight_off")
    )
  }


  VerifierCompte2(){
    this.compteService.getCompte(this.Compte2ID).subscribe(
        (response3) =>{
          this.Compte2 = response3;
            this.clientService.getClient(this.Compte1.numClient).subscribe(
                (resp) =>{
                    this.Client2 = new Client ;
                    this.Client2 = resp ;
                }
            );
          this.showNotification('success',"Client trouvé avec succès.","check_circle_outline")
        },
        (error) =>  this.showNotification('danger',"Compte n'existe pas","highlight_off")
    )
  }

  VerifierClient(){
    this.clientService.getClient(this.ClientID).subscribe(
        (response) => {
          this.Client= response,
              this.adresseClientService.getAdresseByClientId(this.ClientID).subscribe(
                  (response2) =>{
                    this.ClientAdresse = response2,
                        this.compteService.getCompteByIdClient(this.ClientID).subscribe(
                            (response3) =>{
                              this.ClientComptes = response3
                              this.showNotification('success',"Client trouvé avec succès.","check_circle_outline")
                            },
                            (error) =>  this.showNotification('danger',"Compte n'existe pas","highlight_off")
                        )
                  },
                  (error) =>  this.showNotification('danger',"Adresse n'existe pas","highlight_off")
              )
        },
        (error) =>  this.showNotification('danger',"Client inexistant","highlight_off")
    )
  }


  operationVirer(form : NgForm , id1: number , id2 : number ){
    this.virementdata.montant = form.value.montant ;
    this.virementdata.numCompte1 = id1 ;
    this.virementdata.numCompte2 = id2 ;
    this.opertaionservice.virer(this.virementdata).subscribe(
        () =>{
          this.showNotification('success',"Le virement a été effectué avec succès.","check_circle_outline")

          this.operationvirement.montant = this.virementdata.montant ;
          this.operationvirement.codeTransactionVirement = this.ID();
          this.operationvirement.date = new Date() ;
          this.operationvirement.numCompteTrans = this.virementdata.numCompte1 ;
          this.operationvirement.numCompteRec = this.virementdata.numCompte2 ;

          this.opertaionservice.postTransactionVirement(this.operationvirement).subscribe() ;
        },
        (error) =>  {
            if(error.status == 400){
              this.showNotification('danger',"Votre solde est insuffisant","highlight_off")
            }
            else {
              this.showNotification('danger',"Opération de virement a été échouée","highlight_off")
        }

    }
    ) ;
    this.Compte1ID = null ;
    this.Compte1 = null  ;
    this.Compte2ID = null ;
    this.Compte2 = null ;
    this.Client1 = null;
    this.Client2 = null;


  }
  operationDebiter(form : NgForm , id : number){
    this.data.montant = form.value.montant ;
    this.data.numCompte = id ;
    this.opertaionservice.debiter(this.data).subscribe(
        () =>{
          this.showNotification('success',"Le montant a été debité avec succès.","check_circle_outline") ;
          this.operationsimple.montant = this.data.montant ;
          this.operationsimple.codeTransactionStandard = this.ID();
          this.operationsimple.date = new Date() ;
          this.operationsimple.numCompte = this.data.numCompte ;
          this.operationsimple.type = "Débiter" ;
          this.opertaionservice.postTransactionStandard(this.operationsimple).subscribe(
              () => console.log(this.operationsimple)
          ) ;
        },
        (error) =>  this.showNotification('danger',"Opération débit a été échouée ","highlight_off")
    ) ;
    this.Compte1ID = null ;
    this.Compte1 = null  ;
      this.Client1 = null;


  }

  operationCrediter(form : NgForm , id : number){
    this.data.montant = form.value.montant ;
    this.data.numCompte = id ;
    this.opertaionservice.crediter(this.data).subscribe(
        () =>{
          this.showNotification('success',"Le montant a été créditer avec succès.","check_circle_outline");
          this.operationsimple.montant = this.data.montant ;
          this.operationsimple.codeTransactionStandard = this.ID();
          this.operationsimple.date = new Date() ;
          this.operationsimple.numCompte = this.data.numCompte ;
          this.operationsimple.type = "Créditer" ;
          this.opertaionservice.postTransactionStandard(this.operationsimple).subscribe() ;
        },
        (error) =>  {
          if(error.status == 400){
            this.showNotification('danger',"Votre solde est insuffisant","highlight_off")
          }
          else {
            this.showNotification('danger',"Opération de crédit a été échouée","highlight_off")
          }

        }
    ) ;
    this.Compte1ID = null ;
    this.Compte1 = null  ;
      this.Client1 = null;


  }

  getHistorique(form : NgForm){
      this.Historique = new Array() ;
      var tv : Operationvirement[] ;
      var ts : Operationsimple[] ;
      this.opertaionservice.getTransactionStandard(form.value.id).subscribe(
          (res) => {ts = res ;
            this.opertaionservice.getTransactionvirement(form.value.id).subscribe(
            (res) => { tv = res ;
                this.trier(ts ,tv)} ) ;


          }) ;

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

  trier(TS :Operationsimple[] , TV: Operationvirement[] ){

      for( var ts in TS ){this.Historique.push(TS[ts])}
      for( var tv in TV ){this.Historique.push(TV[tv])}
      this.Historique.sort((a, b) => {
          if(a.date > b.date) {
            return -1 }
          else{
              return 1
      }
      })

      this.dataSource = new MatTableDataSource<any>(this.Historique);

  }


    openDetailsDialog(client : Client): void {
        const dialogRef = this.dialog.open(DetailsclientComponent, {
            width: '800px',data: client
        });
    }

}
