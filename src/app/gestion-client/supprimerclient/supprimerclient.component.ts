import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ClientsService} from '../../services/clients.service';
import {AdresseClientService} from '../../services/adresse-client.service';
import {ComptesService} from '../../services/comptes.service';
import {Compte} from '../../classes/compte';

declare var $: any;

@Component({
  selector: 'app-supprimerclient',
  templateUrl: './supprimerclient.component.html',
  styleUrls: ['./supprimerclient.component.scss']
})
export class SupprimerclientComponent implements OnInit {

  AdresseId : number ;
  Comptes : Compte[] ;
  constructor( public dialogRef: MatDialogRef<SupprimerclientComponent>,
               @Inject(MAT_DIALOG_DATA) public data: number,
               private clientservice :ClientsService,
               private adresseClientService : AdresseClientService,
               private compteService : ComptesService) { }

  ngOnInit() {
      this.adresseClientService.getAdresseByClientId(this.data).subscribe(
          (response)=> this.AdresseId = response.numAdresse
      )
    this.compteService.getCompteByIdClient(this.data).subscribe(
        (response)=> {
          this.Comptes = response,
              console.log(this.Comptes)
        }
    )
  }
  supprimer(){

    this.clientservice.deleteClient(this.data).subscribe(
        () => {
          this.adresseClientService.deleteAdresses( this.AdresseId).subscribe(
              () => {
                for(let i=0; i<this.Comptes.length ;i++){
                  this.compteService.deleteCompte(this.Comptes[i].numCompte).subscribe()
                }
                this.showNotification('success',"La suppression du client a été effectuée avec succès.","check_circle_outline")
              },
              (error) =>  this.showNotification('danger',"Une erreur lors de la suppression","highlight_off")
          )
        },
        (error) =>  this.showNotification('danger',"Une erreur lors de la suppression","highlight_off")
    ) ;
    this.dialogRef.close();
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
