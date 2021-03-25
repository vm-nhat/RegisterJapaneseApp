import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-of-classes',
  templateUrl: './list-of-classes.component.html',
  styleUrls: ['./list-of-classes.component.scss']
})
export class ListOfClassesComponent implements OnInit {
  @Output() hidebav = new EventEmitter();
  showMenu : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  showNav()
  {
    this.showMenu = !this.showMenu;
    this.hidebav.emit(this.showMenu);
  }
}
