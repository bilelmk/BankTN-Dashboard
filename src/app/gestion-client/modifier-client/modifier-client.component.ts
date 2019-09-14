import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Client} from '../../classes/client';
import {ClientsService} from '../../services/clients.service';
import {AdresseClientService} from '../../services/adresse-client.service';
import {Adresse} from '../../classes/adresse';

declare var $: any;

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.scss']
})
export class ModifierClientComponent implements OnInit {


  adresse = new Adresse() ;

  constructor( public dialogRef: MatDialogRef<ModifierClientComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Client,
               private clientservice :ClientsService,
               private adresseClientService : AdresseClientService) { }

  ngOnInit() {
    this.adresseClientService.getAdresseByClientId(this.data.numClient).subscribe(
        (res) => this.adresse = res
    ) ;
  }


  modifier(){
    this.clientservice.patchClient(this.data,this.data.numClient).subscribe(
        () => this.adresseClientService.patchAdresse(this.adresse,this.data.numClient).subscribe(
        () => this.showNotification('success',"La modification a été effectuée avec succès.","check_circle_outline"),
            (error) =>  this.showNotification('danger',"Une erreur lors de la modification","highlight_off")
        ),
        (error) =>  this.showNotification('danger',"Une lors de la modification","highlight_off")
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
