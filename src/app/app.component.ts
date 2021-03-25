import { Component, OnInit, ViewChild  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RegisterJapaneseApp';
  // hidebav = false;
  showmenu: boolean = true;
  fnShowMenu(value)
  {
    this.showmenu = value;
    console.log( this.showmenu);

  }
}

