import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages'
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {
  email:string;
  password:string;
  authenticate:boolean;
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
   if( this.authService.login(this.email,this.password)){
     this.authService.authUser=this.email;
     this.router.navigate(['clientside/dashboard'])
   }
   else{
     this.flashMessage.show("Wrong password/username",{
       cssClass:'alert-danger',  timeout:4000
     })
    }
  }

}





