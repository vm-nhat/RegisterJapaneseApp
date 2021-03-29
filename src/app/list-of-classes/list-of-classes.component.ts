import { Level } from './../entity/level';
import { courses } from './../entity/courses';
import { RegisterJpService } from './../Services/Web/register-jp.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-list-of-classes',
  templateUrl: './list-of-classes.component.html',
  styleUrls: ['./list-of-classes.component.scss']
})
export class ListOfClassesComponent implements OnInit {
  @Output() hidebav = new EventEmitter();
  showMenu: boolean = true;
  currentCourses: courses;
  levels: Level[] = [
    {
      id: 1,
      name: "N1"
    },
    {
      id: 2,
      name: "N2"
    },
    {
      id: 3,
      name: "N3"
    },
    {
      id: 4,
      name: "N4"
    },
    {
      id: 5,
      name: "N5"
    }

  ]
  constructor(private registerjpservice: RegisterJpService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  showNav() {
    this.showMenu = !this.showMenu;
    this.hidebav.emit(this.showMenu);
  }

  getAllCourses() {
    this.registerjpservice.getAllCourses()
      .subscribe(
        data => {
          this.currentCourses = data;
          // for(let i = 0; i<data.length; i++){
          //   data[i].startDate = formatDate(data[i].startDate, 'yyyy-MM-dd', 'en');
          //   data[i].endDate =  formatDate(data[i].endDate, 'yyyy-MM-dd', 'en');
          // }
        },
        error => {
          console.log(error);
        });
  }

}
