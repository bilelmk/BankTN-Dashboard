import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import  {Client} from '../../classes/client';
import {AdresseClientService} from '../../services/adresse-client.service';
import {Adresse} from '../../classes/adresse';
import {ComptesService} from '../../services/comptes.service';
import {Compte} from '../../classes/compte';

@Component({
  selector: 'app-detailsclient',
  templateUrl: './detailsclient.component.html',
  styleUrls: ['./detailsclient.component.scss']
})
export class DetailsclientComponent implements OnInit {
   adresse = new Adresse;
   comptes : Compte[] ;
  constructor(
      public dialogRef: MatDialogRef<DetailsclientComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Client,
      private adresseClientService : AdresseClientService,
      private compteservice : ComptesService) { }

  ngOnInit() {
    this.compteservice.getCompteByIdClient(this.data.numClient).subscribe(
        (response) => this.comptes = response ,
        (erreur) => {console.log(erreur)}
    )
    this.adresseClientService.getAdresseByClientId(this.data.numClient).subscribe(
        (response) => this.adresse = response ,
        (erreur) => {}
    )
  }

}
