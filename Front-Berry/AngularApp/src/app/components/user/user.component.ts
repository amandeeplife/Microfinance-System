import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    //template:'<h2>Bertukan</h2>'
    templateUrl: './user.component.html',
    styleUrls:['./user.component.css'],
    //    styles:[`h2 {
    //     color: blue;
    // }`] 
    
})

export class UserComponent {

    firstName=String;
    lastName="Yohannes";
    age :number= 13;
    address={
        street:"nth 4th",
        city:"fairfield",
        state:"iowa"

    }

    constructor(){
        
        this.sayHello();
        console.log(this.age)
        this.hasBirthDay();
        console.log(this.age)
    }

    sayHello(){
        console.log(`hello ${this.firstName}`)
        //same as
        console.log("hello" +this.firstName)
    }

    hasBirthDay(){
        this.age+=1;
        
    }
}