import { detailOfClass, TimeTable, UsersCourses } from './../entity/detail-class';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterJpService } from '../Services/Web/register-jp.service';

@Component({
  selector: 'app-detail-of-class',
  templateUrl: './detail-of-class.component.html',
  styleUrls: ['./detail-of-class.component.scss']
})
export class DetailOfClassComponent implements OnInit {

  constructor(private registerjpservice: RegisterJpService, private _router: ActivatedRoute) { }

  courseId: number;
  dataCourses: detailOfClass;
  public dataTime: TimeTable[] = [];
  public dataUsersCourses: UsersCourses[] = [];

  ngOnInit(): void {
    this.courseId = Number(this._router.snapshot.paramMap.get("id"));
    this.registerjpservice.getCoursesById(this.courseId).subscribe(data => {
      this.dataCourses = data;
      console.log(this.dataCourses);
      this.dataTime = data.timeTableEntities;
      console.log(this.dataTime);
      this.dataUsersCourses = data.usersCoursesEntities;
      console.log(this.dataUsersCourses);
    })
    for (let i = 0; i < this.dataTime.length; i++) {
      let studyTime: TimeTable = new TimeTable();
      studyTime.weeksday = this.dataTime[i].weeksday;
      studyTime.startTime = this.dataTime[i].startTime;
      studyTime.endTime = this.dataTime[i].endTime;
      this.dataTime.push(studyTime);
    }
    for (let i = 0; i < this.dataUsersCourses.length; i++) {
      let usersCourse: UsersCourses = new UsersCourses();
      usersCourse.user.id = this.dataUsersCourses[i].user.id;
      usersCourse.user.fullName = this.dataUsersCourses[i].user.fullName;
      usersCourse.user.birthDate = this.dataUsersCourses[i].user.birthDate;
      usersCourse.user.email = this.dataUsersCourses[i].user.email;
      usersCourse.user.department = this.dataUsersCourses[i].user.department;
      usersCourse.user.phone = this.dataUsersCourses[i].user.phone;
      usersCourse.user.jlptLevel = this.dataUsersCourses[i].user.jlptLevel;
      usersCourse.user.sex = this.dataUsersCourses[i].user.sex;
      usersCourse.user.usersCode = this.dataUsersCourses[i].user.usersCode;
      this.dataUsersCourses.push(usersCourse);
    }
    

  }



}
