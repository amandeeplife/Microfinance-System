import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({selector: 'app-map',
styles: [`
  agm-map {
    height: 300px;
  }
`],
template: `
<agm-map [latitude]="lat" [longitude]="lng"></agm-map>
`
})
export class MapsComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
