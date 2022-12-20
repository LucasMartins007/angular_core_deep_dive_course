import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;

  courses;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    const params = new HttpParams()
      .set("page", "1")
      .set("pageSize", "10");

    this.courses$ = this.http.get<Course[]>('/api/courses', { params });

    // this.course = this.http.get('/api/courses', { params })
    //   .subscribe(courses => this.courses = courses);
  }



}
