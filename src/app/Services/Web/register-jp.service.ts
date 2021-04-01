import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


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

      return this.http.get(`${this.baseUrl}` +"/"+ id);


    }

}
