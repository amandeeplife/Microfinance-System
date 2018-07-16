import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

import {AuthtestService} from '../../services/authtest.service'

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client = {
    id: '',
    firstName: '',
    lastName: '',
    age:'',
    email: '',
    password:'',
    phone: '',
    debit:'',
    salary:'',
    status:"pending"
  }

  disableBalanceOnAdd: boolean = false;
  @ViewChild('clientForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value, valid: boolean}) {
    console.log(value)
    if(this.disableBalanceOnAdd) {
      value.debit = 0;
    }

    if(!valid) {
       this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {

      this.clientService.newClient(value);
       this.flashMessage.show('New client added', {
        cssClass: 'alert-success', timeout: 4000
      }); 
      this.router.navigate(['login']);
    }
  }

}
