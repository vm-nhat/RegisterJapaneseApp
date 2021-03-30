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
  level;
  other;
  public data;
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
          // định dạng yyyy-mm-dd (convert từ ulti sang sql)
          // đã được xử lí gọn hơn ở html
          // for(let i = 0; i<data.length; i++){
          //   data[i].startDate = formatDate(data[i].startDate, 'yyyy-MM-dd', 'en');
          //   data[i].endDate =  formatDate(data[i].endDate, 'yyyy-MM-dd', 'en');
          // }
        },
        error => {
          console.log(error);
        });
  }
  getLevel(level: string, other: string) {
    console.log("OK");
    level =  this.level;
    other =  this.other;

    console.log(level);
    console.log(other);

    // data:FormData;
    // this.data.append("level", level);
    // this.data.append("other", other);

    this.registerjpservice.getWithConditions(this.level, this.other).subscribe(data => {
      console.log(data);
      this.currentCourses = data
    })
  }

  seachOther(level: string, other: string) {
    console.log("searchOther");
    level =  this.level;
    other =  this.other;
    console.log(level);
    console.log(other);
    this.registerjpservice.getWithConditions(this.level, this.other).subscribe( data=>{
      this.currentCourses = data
      //console.log(data);
    })
  }

}
