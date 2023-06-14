import { Component, OnInit } from '@angular/core';
import { service } from 'src/app/models/models';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services:service[] = []
  constructor(private hs:HomeService) {}
  ngOnInit(): void {
      this.hs.getServices().subscribe(
         {
           next: (data:service[]) => this.services = data,
           error: (error:any) => this.services = []
         }
      )
  }
}
