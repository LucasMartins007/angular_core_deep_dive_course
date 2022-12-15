import { Component } from '@angular/core';
import { COURSES } from 'src/bd-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root-test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  title: string = COURSES[0].description;

  startDate = new Date(2000, 0, 1);

  price: number = 9999.99999999;

  rate: number = 0.67;

  course = COURSES[0];

  data = {
    title: 'angular 15 deep dive course'
  }

  onLogoClicked() {
    alert('Hello Angular');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  } 

  onCourseSelected(course: Course) {
    console.log("App component - botton clicked", course);
  }
}
