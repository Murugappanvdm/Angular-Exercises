import { Component , OnInit } from '@angular/core';
import { contact } from 'src/app/models/models';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
    contacts:contact[]=[];

    constructor(private cs:ContactService ){

    }

     ngOnInit(): void {
           this.cs.getContacts().subscribe(
             {
               next: (data:contact[]) => this.contacts =data,
               error: (error:any) => this.contacts =[]
             }
           ) 

     }

}
