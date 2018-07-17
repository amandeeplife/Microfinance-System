


import {ClientService} from '../../services/client.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import { AuthService } from '../../services/auth.service';
import { Client } from '../../model/Client';
  
import { StripeToken } from "stripe-angular"

const template=
`
<div *ngIf="invalidError" style="color:red">
  {{ invalidError.message }}
</div>
 
<stripe-card
  #stripeCard
  (catch) = "onStripeError($event)"
  ([invalid]) = "invalidError"
  (tokenChange) = "setStripeToken($event)"
></stripe-card>
 
<button type="button" (click)="stripeCard.createToken(extraData)">createToken</button>
`


@Component({
  selector: 'currnetuserdetail',
  templateUrl: './currentuserdetail.component.html',
  styleUrls: ['./currentuserdetail.component.css']
})
export class CurrentUserDetailComponent implements OnInit {
  private myTemplate: any = "";
  id:number;
 
  hasBalance:boolean = false;
  showBalanceUpdateInput : boolean = false;
  messageCount =1;
  // client ={ 
   
  //   firstName: '',
  //   lastName: '',
  //   age:'',
  //   email: '',
  //   password:'',
  //   phone: '',
  //   debit: '',
  //   salary:'',
  //   status:''}
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;  message: string;
  cvc: string;
 client:Client={};
  constructor(private clientService:ClientService,
  private router:Router,
  private route:ActivatedRoute,
  private authService : AuthService,
  private elementRef:ElementRef,
  private flashMessage:FlashMessagesService
  ) { 


    this.client =this.authService.currentUser

   

  
  }
 

  ngOnInit() {
    
    setTimeout(function(){ console.log(this.client.status=="Accepted"+this.client.status)
    if(this.client.status=="Accepted"){
      this.flashMessage.show("Client Request Accepted",{
        cssClass:'alert-success',timeout:3000
      });
    }},1000)

   //this.client.firstName = this.authService.currentUser.firstName;

    // this.id = this.route.snapshot.params['id'];
  // this.client =   this.clientService.getClient(this.id);
    // this.client = this.tempUser;
    // if(this.client.balance>0){
    // this.hasBalance = true;
    //    }
   }
 
   onEdit(){
     this.router.navigate(['/client/edit/'])
   }
  onMessage(){ 
   }

 
 
  //  let fetchedUser = this.authService.currentUser
  


   
}



