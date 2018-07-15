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
import {AuthGuard} from './guard/auth.guard'
const routes: Routes = [
  {path:'', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},

  {path:'register', component:RegisterComponent},
  {path:'client/add', component:AddClientComponent,canActivate:[AuthGuard]},
  {path:'settings', component:SettingsComponent,canActivate:[AuthGuard]},

  {path:'client/edit/:id', component:EditClientComponent,canActivate:[AuthGuard]},
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
