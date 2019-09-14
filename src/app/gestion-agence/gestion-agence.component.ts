import { Component, OnInit } from '@angular/core';
import {AgenceService} from '../services/agence.service';
import {Agence} from '../classes/agence';
import {Client} from '../classes/client';
import {SupprimerAgenceComponent} from './supprimer-agence/supprimer-agence.component';
import {ModifierAgenceComponent} from './modifier-agence/modifier-agence.component';
import {MatDialog} from '@angular/material';
import {AjouterAgenceComponent} from './ajouter-agence/ajouter-agence.component';


@Component({
  selector: 'app-gestion-agence',
  templateUrl: './gestion-agence.component.html',
  styleUrls: ['./gestion-agence.component.scss']
})
export class GestionAgenceComponent implements OnInit {

  AGENCES : Agence[] ;
  constructor(private agenceservice : AgenceService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.agenceservice.getAgences().subscribe(
        (res)=> this.AGENCES = res
    )
  }


  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(SupprimerAgenceComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(
        // (res => {
        //   this.clientsService.getClients().subscribe(
        //       (response) => this.CLIENTS = response,
        //       (error) => console.log('error')
        //   )
        // })
    );

  }

  openPatchDialog(): void {
    const dialogRef = this.dialog.open(ModifierAgenceComponent, {
      width: '1000px',
    });
    // dialogRef.afterClosed().subscribe(
    //     (res => {
    //       this.clientsService.getClients().subscribe(
    //           (response) => this.CLIENTS = response,
    //           (error) => console.log('error')
    //       )
    //     })
    // );
  }


  openAddDialog(): void {
    const dialogRef = this.dialog.open(AjouterAgenceComponent, {
      width: '1000px',
    });
    // dialogRef.afterClosed().subscribe(
    //     (res => {
    //       this.clientsService.getClients().subscribe(
    //           (response) => this.CLIENTS = response,
    //           (error) => console.log('error')
    //       )
    //     })
    // );
  }

}
