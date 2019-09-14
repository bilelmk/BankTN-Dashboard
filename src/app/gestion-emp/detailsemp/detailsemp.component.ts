import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Employee} from '../../classes/employee';
import {AdresseEmpl} from '../../classes/AdresseEmpl';
import {AdresseEmplService} from '../../services/adresse-empl.service';

@Component({
  selector: 'app-detailsemp',
  templateUrl: './detailsemp.component.html',
  styleUrls: ['./detailsemp.component.scss']
})
export class DetailsempComponent implements OnInit {

  adresse = new  AdresseEmpl ;
  constructor(public dialogRef: MatDialogRef<DetailsempComponent>,
              @Inject(MAT_DIALOG_DATA) public emp: Employee ,
               private adrservice : AdresseEmplService) { }

  ngOnInit() {
    this.adrservice.getAdresseByEmployeeId(this.emp.numEmployee).subscribe(
        (resp) => this.adresse = resp ,
        (error1) => console.log(error1)

    )
  }

}
