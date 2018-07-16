import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages'
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  isAdmin:boolean=false;

  constructor(private authService:AuthService,
          private router:Router,
          private flashMessage:FlashMessagesService  
  ) { }

  ngOnInit() {
    // this.authService.getAuth()
    // if(true){
    //   this.router.navigate(['/'])
    // }
  }
  onSubmit(){
    if (this.email=="admin@admin.com"){
      this.authService.authUser=this.email;

      this.router.navigate(['/'])
    }

  else if( this.authService.login(this.email,this.password)==true&& this.isAdmin==true){
     this.authService.authUser=this.email;
     this.router.navigate(['/'])
   }
   
   else if (this.authService.login(this.email,this.password)==true&&this.isAdmin==false){
    this.authService.authUser=this.email;
    this.router.navigate(['clientside/dashboard'])
  }
   else{
     this.flashMessage.show("Wrong password/username",{
       cssClass:'alert-danger',  timeout:4000
     })
    }
  }
  register(){
    this.router.navigate(['register'])

  }

}
