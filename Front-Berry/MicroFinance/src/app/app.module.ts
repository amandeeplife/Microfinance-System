import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from'@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'login',
        component:LoginComponent
      },
    { path: '',
      component:HomeComponent
    },
 
  {
    path:'admin',
    component:AdminComponent
  }
    ])
      
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
