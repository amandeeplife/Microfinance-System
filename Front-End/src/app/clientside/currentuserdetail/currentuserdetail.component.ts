


import {ClientService} from '../../services/client.service';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
  

@Component({
  selector: 'currnetuserdetail',
  templateUrl: './currentuserdetail.component.html',
  styleUrls: ['./currentuserdetail.component.css']
})
export class CurrentUserDetailComponent implements OnInit {
  private myTemplate: any = "";
  id:number;
  client;
  hasBalance:boolean = false;
  showBalanceUpdateInput : boolean = false;
  messageCount =1;
  tempUser ={id: 2,
    firstName: "Amanuel",
    lastName: "Tassew",
    email: "amtassew@mum.edu",
    phone: 12312323213,
    balance: 1500}

  constructor(private clientService:ClientService,
  private router:Router,
  private route:ActivatedRoute,
  private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  // this.client =   this.clientService.getClient(this.id);
    this.client = this.tempUser;
    if(this.client.balance>0){
    this.hasBalance = true;
       }
   }
    
  onMessage(){ 
   }

 



   
}



