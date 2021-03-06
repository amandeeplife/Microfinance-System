import {ClientService} from '../../services/client.service';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import { Client } from '../../model/Client';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  client={}
  id:number;
  // client:Client = {
  //  firstName: '',
  //   lastName: '',
  //   age:0,
  //   email: '',
  //   password:'',
  //   phone:'' ,
  //   debit:0 
  // };
disableBalanceOnEdit:boolean = true;

  hasBalance:boolean = false;
  showBalanceUpdateInput : boolean = false;
   constructor(private clientService:ClientService,
  private router:Router,
  private route:ActivatedRoute,
  private authService:AuthService,
  private flashMessage:FlashMessagesService
  ) { }
  
  ngOnInit() {
   this.client = this.authService.currentUser
  //  this.client = "" //  this.clientService.getClient(this.id);
    
   }
  updateBalance(){
  //   this.clientService.updateClient(this.client) 
  //   this.flashMessage.show("Balance updated",{
  // cssClass:'alert-success',timeout:3000
  // });
   }
 

   onSubmit({value,valid}:{value:Client, valid:boolean}){
     if(!valid){
       this.flashMessage.show('Please fill out the form correctely',{
         cssClass:'alert-danger',timeout:400
       })
      }
       else {
        this.router.navigate(['client/'+this.id])
        this.clientService.updateClient(value)
       

        this.flashMessage.show('Client Updated',{
          cssClass:'alert-success',timeout:400
        })
      
       }
      
     }
   

   }

