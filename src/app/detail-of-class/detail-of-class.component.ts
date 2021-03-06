import { detailOfClass, TimeTable, UsersCourses } from './../entity/detail-class';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterJpService } from '../Services/Web/register-jp.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterJapaneseModalComponent } from '../register-japanese-modal/register-japanese-modal.component';
import { UsersCoursesPaging } from '../entity/UsersCourses';

@Component({
  selector: 'app-detail-of-class',
  templateUrl: './detail-of-class.component.html',
  styleUrls: ['./detail-of-class.component.scss']
})
export class DetailOfClassComponent implements OnInit {
  page = 1;
  pageSize = 0;
  totalElement = 0;

  constructor(private registerjpservice: RegisterJpService, private _router: ActivatedRoute, private modalService: NgbModal) { }

  courseId: number;
  dataListClassMember: UsersCoursesPaging[] = [];
  dataCourses: detailOfClass;
  public dataTime: TimeTable[] = [];
  public dataUsersCourses: UsersCourses[] = [];
  closeResult = "";

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
    // for (let i = 0; i < this.dataUsersCourses.length; i++) {
    //   let usersCourse: UsersCourses = new UsersCourses();
    //   usersCourse.user.id = this.dataUsersCourses[i].user.id;
    //   usersCourse.user.fullName = this.dataUsersCourses[i].user.fullName;
    //   usersCourse.user.birthDate = this.dataUsersCourses[i].user.birthDate;
    //   usersCourse.user.email = this.dataUsersCourses[i].user.email;
    //   usersCourse.user.department = this.dataUsersCourses[i].user.department;
    //   usersCourse.user.phone = this.dataUsersCourses[i].user.phone;
    //   usersCourse.user.jlptLevel = this.dataUsersCourses[i].user.jlptLevel;
    //   usersCourse.user.sex = this.dataUsersCourses[i].user.sex;
    //   usersCourse.user.userCode = this.dataUsersCourses[i].user.userCode;
    //   this.dataUsersCourses.push(usersCourse);
    // }
    const req =
    {
      id: this.courseId
    }
    console.log(req);

    this.registerjpservice.getListOfClassPaging(req).subscribe(data => {
      this.dataListClassMember = data['data'];
      this.page = data['pageNum'];
      this.pageSize = data['pageSize']
      this.totalElement = data['totalElement'];
      console.log(data);
      console.log(this.page);
    })


  }

  open() {
    this.modalService.open(RegisterJapaneseModalComponent).result.then((result) => {
      //console.log(result)
      const reqMember = {
        ...result,
        coursesId: this.courseId
      }
      console.log(reqMember);

      this.registerjpservice.saveMemberOfList(reqMember).subscribe(data => {
        console.log(data);
        //console.log(this.page);
        let pageReload: number = Math.floor(this.totalElement/this.pageSize) + 1;
        console.log(pageReload);

        const req =
        {
          id: this.courseId,
          pageNum: pageReload
        }
        console.log(this.totalElement);
        this.loadListHavePaging(req);
        // this.registerjpservice.getListOfClassPaging(this.courseId).subscribe(data => {
        //   this.dataListClassMember = data['data'];
        //console.log(this.dataUsersCourses);
        // })

      })
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  pgChange(event) {
    console.log(event)
    const req =
    {
      id: this.courseId,
      pageNum: event
    }
    console.log(req);
    this.loadListHavePaging(req);
    // this.registerjpservice.getListOfClassPaging(req).subscribe(data => {
    //     this.dataListClassMember = data['data'];
    //     this.page = data['pageNum'];
    //     this.pageSize = data['pageSize']
    //     this.totalElement = data['totalElement'];
    //     console.log(data);
    // })
  }
  loadListHavePaging(req: any) {

    this.registerjpservice.getListOfClassPaging(req).subscribe(data => {
      this.dataListClassMember = data['data'];
      this.page = data['pageNum'];
      this.pageSize = data['pageSize']
      this.totalElement = data['totalElement'];
      console.log(data);
    })
  }



}
