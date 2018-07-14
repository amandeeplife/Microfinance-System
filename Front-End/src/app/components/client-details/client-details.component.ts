import {ClientService} from '../../services/client.service';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id:number;
  client;
  hasBalance:boolean = false;
  showBalanceUpdateInput : boolean = false;

  constructor(private clientService:ClientService,
  private router:Router,
  private route:ActivatedRoute,
  private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  this.client =   this.clientService.getClient(this.id);
  if(this.client.balance>0){
    this.hasBalance = true;
  }
  console.log(this.client)
  }
  updateBalance(){
this.clientService.updateClient(this.client) 
this.flashMessage.show("Balance updated",{
  cssClass:'alert-success',timeout:3000
});
   }

   onDeleteClick(){
     if(confirm('Are you sure?')){
      this.clientService.deletClient(this.client);
     }
     this.router.navigate(['/'])
   }
}
