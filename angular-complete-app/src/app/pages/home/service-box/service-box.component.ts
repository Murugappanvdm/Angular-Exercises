import { Component, Input } from '@angular/core';
import { service } from 'src/app/models/models';

@Component({
  selector: 'app-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.css']
})
export class ServiceBoxComponent {
     @Input("service")  current:service = {
        id: 0, description:"", image:"", title:""
     }
}
