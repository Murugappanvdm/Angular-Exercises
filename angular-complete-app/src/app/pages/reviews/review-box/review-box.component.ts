import { Component,Input } from '@angular/core';
import { review } from 'src/app/models/models';

@Component({
  selector: 'app-review-box',
  templateUrl: './review-box.component.html',
  styleUrls: ['./review-box.component.css']
})
export class ReviewBoxComponent {
  @Input("review") current:review = {id:0,name:"",message:"",type:"",email:""}
}
