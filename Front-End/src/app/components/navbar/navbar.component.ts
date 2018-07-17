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
  token
  constructor(private authService:AuthService,
    private router:Router,
     private flashMessage:FlashMessagesService) {this.token=  this.authService.getToken()
    
      this.isLoggedIn = true;
     
    
    }

 ngAfterViewChecked() {
   //Called after every check of the component's view. Applies to components only.
   //Add 'implements AfterViewChecked' to the class.
   this.loggedInUser =this.authService.currentUser.email
 }
  ngOnInit() {

    // this.authService.getAuth
 console.log(this.authService.getToken()+">>>>>")
    if(this.authService.getToken()!=undefined){
     
     
    
      console.log(this.authService.currentUser.email)
 
    }else {
      this.isLoggedIn = false;
    }
  }
  onLogOutClick(){
    this.authService.setIsloggedInFalse();
    this.authService.logOUt()
    this.router.navigate(['/login'])
    this.flashMessage.show("You are logged out",{
      cssClass: 'alert-success',timeout:4000
    })
   
  }

}
