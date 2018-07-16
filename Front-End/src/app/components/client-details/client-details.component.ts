import {ClientService} from '../../services/client.service';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import { Client } from '../../model/Client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id:number;
  client:Client;
  hasBalance:boolean = false;
  showBalanceUpdateInput : boolean = false;
  currentUserisAdmin=true;
  constructor(private clientService:ClientService,
  private router:Router,
  private route:ActivatedRoute,
  private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  this.client =   this.clientService.getClient(this.id);
  if(this.client.salary>0){
    this.hasBalance = true;
  }
  console.log(this.client)
  }
  updateBalace(){
this.clientService.updateClient(this.client) 
this.flashMessage.show("Balance updated",{
  cssClass:'alert-success',timeout:3000
});
   }

   onAcceptClick(){
    this.flashMessage.show("Client Request Accepted",{
      cssClass:'alert-success',timeout:3000
    });
    this.client.status="Accepted";
   }
}
