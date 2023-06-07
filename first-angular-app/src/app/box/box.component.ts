import { Component, Input, OnInit } from '@angular/core';
import { ThemeProps } from '../types';
import { DataService } from '../servives/data.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input() boxtheme: ThemeProps = { color: "", backgroundColor: "" }
  @Input("title") boxtitle: string = ""
  features: string[] = []
  constructor(private ds: DataService) {
    //ds.getFeatures(this.boxtitle) -- this wrong... after constructor only this can be used

  }
  ngOnInit(): void {
    this.features = this.ds.getFeatures(this.boxtitle)
  }
}
