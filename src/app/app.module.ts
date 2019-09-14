import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthentificationService } from './service/authentification.service';
import { ClientsService } from './services/clients.service';
import { OprationService } from './services/opration.service';
import { AgenceService } from './services/agence.service';





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    LogoutComponent,
  ],
  providers: [AuthentificationService,ClientsService,OprationService,AgenceService],
  bootstrap: [AppComponent],


})
export class AppModule { }
