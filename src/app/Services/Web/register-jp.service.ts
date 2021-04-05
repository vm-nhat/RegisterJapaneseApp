import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersCoursesPaging } from 'src/app/entity/UsersCourses';


@Injectable({
  providedIn: 'root'
})
export class RegisterJpService {


  private baseUrl = 'http://localhost:9999/hrm/';


  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'searchAll');
  }

  getWithConditions(level: string, other: string): Observable<any> {
    if (level === undefined) {
      level = "";
    } else
    if (other === undefined) {
      other = "";
    }
    const params = new HttpParams()
      .append('level', level)
      .append('other', other);

    return this.http.get(`${this.baseUrl}` + 'searchFilter', {params});
  }

  getCoursesById(id: number): Observable<any>{
      console.log(id)

    return this.http.get(`${this.baseUrl}` + id);
    }
  saveMemberOfList(data: string){
      console.log(data);
    return this.http.post(`${this.baseUrl}` + 'saveMember',data)
    }

  getListOfClassPaging(data: any){
      // console.log(data)
      return this.http.post<UsersCoursesPaging>(`${this.baseUrl}` + 'listOfClassMember', data)
    }

}
