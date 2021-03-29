import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterJpService {


  private baseUrl = 'http://localhost:9999/hrm/';

  constructor(private http:HttpClient) { }

  getAllCourses(): Observable<any>{
    return this.http.get(`${this.baseUrl}`+ 'searchAll');
  }
  // getWithConditions(): Observable<any>{
  //   return this.http.get(`${this.baseUrl}`+ 'searchFilter');
  // }

}
