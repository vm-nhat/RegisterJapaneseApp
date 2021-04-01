export class detailOfClass  {
  Id : number ;
	coursesCode : string;
	coursesName : string;
	coursesLevel : string;
	startDate : Date ;
	endDate : Date;
	teacher : string ;
	room : string;
  currentMember: number;
  maxMember: number;
  status:number;
  deadline: number;
  timeTableEntities: TimeTable[];
  usersCoursesEntities: any;
}

export class TimeTable {
endTime: string;
id: number;
startTime: string;
weeksday: string;

}
export class UsersCourses {
  user = {
"birthDate": "Date",
"department": "string",
"email": "string",
"fullName": "string",
"id": "number",
"jlptLevel": "string",
"phone": "string",
"sex": "number",
"usersCode": "string",
  }
}
