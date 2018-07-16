import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/Forms'
import {FlashMessagesModule} from 'angular2-flash-messages'
import {AuthService} from '../app/services/auth.service'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppRoutingModule } from './/app-routing.module';
import { CurrentUserDashboardComponent } from './clientside/currentuserdashboard/currentuserdashboard.component';
import { CurrentUserDetailComponent } from './clientside/currentuserdetail/currentuserdetail.component';
import { ClientLoginComponent } from './clientside/client-login/client-login.component';
import { Module as StripeModule } from "stripe-angular";
import { LandingComponent } from './components/landing/landing.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientsComponent,
    SidebarComponent,
    AddClientComponent,
    EditClientComponent,
    ClientDetailsComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
     NotfoundComponent,
     CurrentUserDashboardComponent,
     CurrentUserDetailComponent,
     ClientLoginComponent,
     LandingComponent
  ],
  imports: [
    FlashMessagesModule.forRoot(),
    FormsModule,
    BrowserModule,
     AppRoutingModule,
     StripeModule 
  ],
  providers: [ ],
   bootstrap: [AppComponent]
})
export class AppModule { }
