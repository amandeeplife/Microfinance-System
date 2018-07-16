import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:Client[] ;
  totalOwed :number
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clients = this.clientService.getClients();
    this.getTotalOwed();
  }
  getTotalOwed(){
    this.totalOwed=0
     for(let i=0; i<this.clients.length; i++){
      this.totalOwed+=parseFloat(this.clients[i].debit.toString())
    }
  }

}
