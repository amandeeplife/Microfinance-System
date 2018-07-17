import { Component, OnInit, ElementRef } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-currentuserdashboard',
  templateUrl: './currentuserdashboard.component.html',
  styleUrls: ['./currentuserdashboard.component.css']
})
export class CurrentUserDashboardComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private elementRef :ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    var s = document.createElement("script")
    s.type = "text/javascript"
    s.src = "assets/custom.js"
    this.elementRef.nativeElement.appendChild(s)
  }
 
}
