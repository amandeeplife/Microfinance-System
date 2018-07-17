import { Component, OnInit, ElementRef } from '@angular/core';



@Component({
  selector: 'app-currentuserdashboard',
  templateUrl: './currentuserdashboard.component.html',
  styleUrls: ['./currentuserdashboard.component.css']
})
export class CurrentUserDashboardComponent implements OnInit {

  constructor(private elementRef :ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    var s = document.createElement("script")
    s.type = "text/javascript"
    s.src = "./custom-scripts/custom.js"
    this.elementRef.nativeElement.appendChild(s)
  }
 
}
