import {AuthService} from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;
  loggedInUser:string;
  showRegister:boolean;

  constructor(private authService:AuthService,
    private router:Router,
     private flashMessage:FlashMessagesService) { }

  ngOnInit() {
    // this.authService.getAuth
   let auth=true; //to be changed latter
    if(auth){
      this.isLoggedIn = true;
      this.loggedInUser ="amtassew@mum.edu"//this.authService.getAuth();
      console.log(this.loggedInUser)

    }else {
      this.isLoggedIn = false;
    }
  }
  onLogOutClick(){
    this.authService.logOUt()
    this.flashMessage.show("You are logged out",{
      cssClass: 'alert-success',timeout:4000
    })
    this.router.navigate(['/login'])
  }

}
