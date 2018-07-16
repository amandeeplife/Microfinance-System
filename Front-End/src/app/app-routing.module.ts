import { NgModule } from '@angular/core';
import { RouterModule,Routes, Router } from '@angular/router';


import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component'
import {AddClientComponent} from './components/add-client/add-client.component';
import {EditClientComponent} from './components/edit-client/edit-client.component';
import {SettingsComponent} from './components/settings/settings.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {ClientLoginComponent} from './clientside/client-login/client-login.component'
import {CurrentUserDashboardComponent} from './clientside/currentuserdashboard/currentuserdashboard.component'
import {AuthGuard} from './guard/auth.guard'
const routes: Routes = [
  {path:'', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  // {path:'memberlogin', component:ClientLoginComponent},
  {path:'clientside/dashboard', component:CurrentUserDashboardComponent},
  {path:'', component:ClientLoginComponent},



  // {path:'register', component:RegisterComponent},
  {path:'register', component:AddClientComponent },
  {path:'settings', component:SettingsComponent,canActivate:[AuthGuard]},

  {path:'clientside/edit', component:EditClientComponent},//,canActivate:[AuthGuard]
  {path:'client/:id', component:ClientDetailsComponent,canActivate:[AuthGuard]},
  {path:'**', component:NotfoundComponent},




];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
