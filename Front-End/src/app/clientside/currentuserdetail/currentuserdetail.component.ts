


import {ClientService} from '../../services/client.service';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import { AuthService } from '../../services/auth.service';
import { Client } from '../../model/Client';
  

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
 
 client:Client;
  constructor(private clientService:ClientService,
  private router:Router,
  private route:ActivatedRoute,
  private authService : AuthService,
  private flashMessage:FlashMessagesService
  ) { 


    
   

  
  }
  
 
  ngOnInit() {
    this.client =this.authService.currentUser

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



