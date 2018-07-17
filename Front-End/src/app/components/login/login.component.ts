import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service'
import {FlashMessagesService} from 'angular2-flash-messages'
import {Router} from '@angular/router'
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  forAdmin=""
  isAdmin:boolean=false;

  constructor( 
          private router:Router,
          private flashMessage:FlashMessagesService ,
          private authService:AuthService
  ) { }

  ngOnInit() {
    // this.authService.getAuth()
    // if(true){
    //   this.router.navigate(['/'])
    // }
  }
    sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

  async onSubmit(){

      this.authService.login(this.email,this.password)
      await this.sleep(200)
     
        if (this.email=="admin@admin.com"){
          this.forAdmin = "Admin Panel"
          this.router.navigate(['/'])
        }
    
      // else if( this.authService.login(this.email,this.password)!=null&& this.isAdmin==true){
      //   //  this.authService.authUser=this.email;
      //    this.router.navigate(['/'])
      //  }
       
       else if (this.authService.authentication==true){
        // this.authService.authUser=this.email;
        this.router.navigate(['clientside/dashboard'])
        console.log(this.authService.getToken()+"--->")
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
