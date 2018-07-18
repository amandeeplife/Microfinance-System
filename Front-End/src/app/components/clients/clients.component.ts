import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/Client';
import { map, toArray } from 'rxjs/operators'
 @Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:Client[] =[];
  totalOwed :number
  client:Client={}
  counter:number =0;
  constructor(private clientService: ClientService) { 
    this.clientService.getClients().toPromise().then(data=>{
   console.log(data)
      // this.client.accountId = data[0].accountId
      // this.client.firstName = data[0].firstName
      // this.client.lastName = data[0].lastName
      // this.client.age = data[0].firstName
      // this.client.email = data[0].email
      // this.client.salary = data[0].salary
      // this.client.debit = data[0].currentDebit
  
      // this.clients.push(this.client)
      // this.client={}
      this.client.accountId = data[1].accountId

      this.client.firstName = data[1].firstName
      this.client.lastName = data[1].lastName
      this.client.age = data[1].firstName
      this.client.email = data[1].email
      this.client.salary = data[1].salary
      this.client.debit = data[1].currentDebit
  
      this.clients.push(this.client)
      this.client={}
      if(data[2]!=undefined){
        this.client.accountId = data[2].accountId

        this.client.email = data[2].email

      this.client.firstName = data[2].firstName
      this.client.lastName = data[2].lastName
      this.client.age = data[2].firstName
      this.client.salary = data[2].salary
      this.client.debit = data[2].currentDebit
  
      this.clients.push(this.client)}
      
  if(data[3]!=undefined){
    this.client.accountId = data[3].accountId

      this.client.firstName = data[3].firstName
      this.client.lastName = data[3].lastName
      this.client.age = data[3].firstName
      this.client.email = data[3].lastName
      this.client.salary = data[3].salary
      
      this.clients.push(this.client)
  }
  
       
       
  
     
  })
  
  }
  temp={};
  ngOnInit() {


   // this.getTotalOwed();
  }

 


  getTotalOwed(){
  }

}
