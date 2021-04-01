import { detailOfClass } from './../entity/detail-class';
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


  ngOnInit(): void {
    this.courseId = Number(this._router.snapshot.paramMap.get("id"));
    this.registerjpservice.getCoursesById(this.courseId).subscribe(data => {
      this.dataCourses = data;
      console.log(this.dataCourses);
      // for (let i = 0; i < this.dataCourses.length; i++) {
      //   // this.dataCourses.coursesCode = this.dataCourses[0].coursesCode;
      //   // this.dataCourses.coursesLevel = this.dataCourses[0].coursesLevel;
      //   // this.dataCourses.coursesName = this.dataCourses[0].coursesName;
      //   // this.dataCourses.startDate = this.dataCourses[0].startDate;
      //   // this.dataCourses.endDate = this.dataCourses[0].endDate;
      //   // this.dataCourses.teacher = this.dataCourses[0].teacher;
      //   // this.dataCourses.room = this.dataCourses[0].room;
      //   // this.dataCourses.currentMember = this.dataCourses[0].currentMember;
      //   // this.dataCourses.maxMember = this.dataCourses[0].maxMember;
      //   // this.dataCourses.status = this.dataCourses[0].status;
      //   // this.dataCourses.deadline = this.dataCourses[0].deadline;

      //   // let studyTime: StudyJapaneseTime = new StudyJapaneseTime();
      //   // studyTime.weeksday = this.dataCourses[i].weeksday;
      //   // studyTime.starttime = this.dataCourses[i].starttime;
      //   // studyTime.endtime = this.dataCourses[i].endtime;
      //   // this.dataTime.push(studyTime);
      // }
    })
  }



}
