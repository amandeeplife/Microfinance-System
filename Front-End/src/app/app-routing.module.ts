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

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'login', component:LoginComponent},

  {path:'register', component:RegisterComponent},
  {path:'client/add', component:AddClientComponent},
  {path:'settings', component:SettingsComponent},

  {path:'client/edit/:id', component:EditClientComponent},
  {path:'client/:id', component:ClientDetailsComponent},
  {path:'**', component:NotfoundComponent},




];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
