import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Employee} from '../../classes/employee';
import {EmployesService} from '../../services/employes.service';
import {AdresseEmplService} from '../../services/adresse-empl.service';
import {AdresseEmpl} from '../../classes/AdresseEmpl';
declare var $: any;

@Component({
  selector: 'app-modifieremp',
  templateUrl: './modifieremp.component.html',
  styleUrls: ['./modifieremp.component.scss']
})
export class ModifierempComponent implements OnInit {

  adresse = new AdresseEmpl() ;
  constructor(public dialogRef: MatDialogRef<ModifierempComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Employee,
              private empservice : EmployesService,
              private adresseemplservice : AdresseEmplService) { }

  ngOnInit() {
    this.adresseemplservice.getAdresseByEmployeeId(this.data.numEmployee).subscribe(
        (res)=> this.adresse = res
    )
  }

  modifier(){
    this.empservice.putEmployee(this.data , this.data.numEmployee).subscribe(
          () => this.adresseemplservice.patchAdresseEmpl(this.adresse,this.adresse.numAdresse).subscribe(
              () => this.showNotification('success',"La modification a été effectuée avec succès.","check_circle_outline"),
              (error) =>  {this.showNotification('danger',"Une erreur systéme est survenue lors de la modificationn","highlight_off")
                , console.log(error)}
          ),
          (error) => {
            this.showNotification('danger',"Une erreur systéme est survenue lors de la modification","highlight_off")
          }
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
