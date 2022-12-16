import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from 'src/bd-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root-test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards?: QueryList<CourseCardComponent>;

  constructor() { }

  ngAfterViewInit(): void {
    // console.log(this.cards);
    // this.cards?.changes.subscribe(
    //   cards => console.log(cards)
    // );
  }

  onCourseSelected() {
    
  }

  onCoursesEdited(): void {
    this.courses.push(
      { 
        id: 55,
        description: "angular core deep dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
      }
    );
  }
}
