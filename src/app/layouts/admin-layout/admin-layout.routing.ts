import { Routes } from '@angular/router';


import {GestionClientComponent} from '../../gestion-client/gestion-client.component';
import {GestionCompteComponent} from '../../gestion-compte/gestion-compte.component';
import {GestionAgenceComponent} from '../../gestion-agence/gestion-agence.component';
import {GestionEmpComponent} from '../../gestion-emp/gestion-emp.component';
import {GestionOperationComponent} from '../../gestion-operation/gestion-operation.component';
import {RechercheComponent} from '../../recherche/recherche.component';
import {AdminComponent} from '../../admin/admin.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AuthGaurdService } from '../../service/auth-gaurd.service';

export const AdminLayoutRoutes: Routes = [
    /**************** Nouveaux route *************************/
    { path: 'gestionClient',    component: GestionClientComponent },
    { path: 'gestionCompte',    component: GestionCompteComponent },
    { path: 'gestionAgence',    component: GestionAgenceComponent },
    { path: 'gestionEmp',       component: GestionEmpComponent },
    { path: 'gestiobOperation', component: GestionOperationComponent },
    { path: 'recherche',        component: RechercheComponent },
    { path: 'admin',            component: AdminComponent },


    { path: 'dashboard',      component: DashboardComponent, canActivate:[AuthGaurdService] },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
