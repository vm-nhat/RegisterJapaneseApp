import { Component, OnInit, ViewChild  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RegisterJapaneseApp';
  showmenu: boolean = true;
  // fnShowMenu(value)
  // {
  //   console.log("Đã nhận");
  //   this.showmenu = value;
  //   console.log(value);
  // }
  showNav() {
    console.log("moi");

    this.showmenu = !this.showmenu;
  }
}

