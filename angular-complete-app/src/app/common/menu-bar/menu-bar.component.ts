import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  languages: string[] = ["English", "Tamil", "Telugu", "Hindi"]
  current = "English"
  constructor(private ts: TranslateService) {
    this.ts.use("english")
  }
  setLang() {
    this.ts.use(this.current.toLowerCase())
  }
}
