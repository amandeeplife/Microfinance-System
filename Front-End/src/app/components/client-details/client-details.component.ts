import {ClientService} from '../../services/client.service';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import { Client } from '../../model/Client';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  
  isLoggedin=false;
  id:number;
  client:Client={};
  hasBalance:boolean = false;
  isAccepted

  showBalanceUpdateInput : boolean = false;
  currentUserisAdmin=true;
  currentUseracct:number=0
  constructor(private clientService:ClientService,
  private router:Router,
  private route:ActivatedRoute,
  private flashMessage:FlashMessagesService,
  private authService : AuthService
  ) {     
    this.authService.getClientbyAccountId(this.route.snapshot.params.id).subscribe(data=>{ 
       
      this.isLoggedin=this.authService.isLogged;


      this.client.firstName =data[0].firstName
      this.client.lastName =data[0].lastName
      this.client.age =data[0].age
      this.client.salary =data[0].salary
      this.client.email =data[0].email
      this.client.debit =data[0].currentDebit
      this.client.phone =data[0].phone
      this.client.status =data[0].status
      this.client.accountId =data[0].accountId
     
      if(this.client.accountId=="Pending"){this.isAccepted=true}

      
       })}
      

  ngOnInit() {


    // this.id = this.route.snapshot.params['id'];
  //    this.clientService.getClient(this.authService.currentUser).subscribe(data=>console.log(data+"inside first"));
  // if(this.client.salary>0){
  //   this.hasBalance = true;
  // }
  // console.log(this.client)
  }
  updateBalace(){
this.clientService.updateClient(this.client) 
this.flashMessage.show("Balance updated",{
  cssClass:'alert-success',timeout:3000
});
   }

   onAcceptClick(acct){
 
    this.clientService.setStatus(acct)
    this.flashMessage.show("Client Request Accepted",{
      cssClass:'alert-success',timeout:3000
    });
    this.client.status="Accepted";
   }

   onDeleteClick(acct){
      this.clientService.deleteUser(acct)
      this.flashMessage.show("Client  deleted",{
        cssClass:'alert-danger',timeout:3000
      });
      this.router.navigate([''])
   }
}
