import { Component, Input} from '@angular/core';
import { contact } from 'src/app/models/models';

@Component({
  selector: 'app-contact-box',
  templateUrl: './contact-box.component.html',
  styleUrls: ['./contact-box.component.css']
})
export class ContactBoxComponent {
   @Input("contact") current:contact={
     address:"",city:"",pin:0, title:"",image:""
   }
}
