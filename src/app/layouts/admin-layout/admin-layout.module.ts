import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import {GestionClientComponent} from '../../gestion-client/gestion-client.component';
import {GestionCompteComponent} from '../../gestion-compte/gestion-compte.component';
import {GestionAgenceComponent} from '../../gestion-agence/gestion-agence.component';
import {GestionEmpComponent} from '../../gestion-emp/gestion-emp.component';
import {GestionOperationComponent} from '../../gestion-operation/gestion-operation.component';
import {RechercheComponent} from '../../recherche/recherche.component';
import {AdminComponent} from '../../admin/admin.component';
import { SupprimerclientComponent } from '../../gestion-client/supprimerclient/supprimerclient.component';
import { DetailsclientComponent } from '../../gestion-client/detailsclient/detailsclient.component';
import { ModifierClientComponent } from '../../gestion-client/modifier-client/modifier-client.component' ;
import { AjouterempComponent } from '../../gestion-emp/ajouteremp/ajouteremp.component';
import { ModifierempComponent } from '../../gestion-emp/modifieremp/modifieremp.component';
import { SupprimerempComponent } from '../../gestion-emp/supprimeremp/supprimeremp.component';
import { DetailsempComponent } from '../../gestion-emp/detailsemp/detailsemp.component';


import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { AjouterAgenceComponent } from '../../gestion-agence/ajouter-agence/ajouter-agence.component';
import { SupprimerAgenceComponent } from '../../gestion-agence/supprimer-agence/supprimer-agence.component';
import { ModifierAgenceComponent } from '../../gestion-agence/modifier-agence/modifier-agence.component';

import {MatDialogModule} from '@angular/material/dialog';



import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatIconModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatTableModule, MatSortModule

} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,MatNativeDateModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
      MatSortModule
  ],
  declarations: [
    GestionClientComponent,
    GestionCompteComponent,
    GestionAgenceComponent,
    GestionEmpComponent,
    GestionOperationComponent ,
    RechercheComponent,
    AdminComponent,
    SupprimerclientComponent,
    DetailsclientComponent,
    ModifierClientComponent,
    AjouterempComponent,
    ModifierempComponent,
    SupprimerempComponent,
    DetailsempComponent,


    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    NotificationsComponent,
    UpgradeComponent,

    AjouterAgenceComponent,
    SupprimerAgenceComponent,
    ModifierAgenceComponent
  ],
    entryComponents:[DetailsclientComponent,SupprimerclientComponent,ModifierClientComponent
                    ,AjouterempComponent,ModifierempComponent,SupprimerempComponent,DetailsempComponent,
                    AjouterAgenceComponent,SupprimerAgenceComponent,ModifierAgenceComponent]
})

export class AdminLayoutModule {}
