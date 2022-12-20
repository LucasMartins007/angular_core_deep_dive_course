import { Component, EventEmitter, Input, OnInit, AfterViewInit, Output, TemplateRef, ContentChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { CourseImageComponent } from '../course-image/course-image.component';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CourseCardComponent implements OnInit, AfterViewInit {

  @Input()
  course!: Course;

  @Input()
  cardIndex!: number;

  @Input()
  noImageTpl!: TemplateRef<any>;

  @Output('courseSelected')
  courseEmmiter = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent, {read: ElementRef})
  image: any;

  constructor() { };

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
      console.log(this.image);
  }

  onCourseViewed() {
    this.courseEmmiter.emit(this.course);
  }

  isImageVisible(): boolean {
    return this.course.iconUrl != null;
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }

    return {
      'beginner': this.course.category == 'BEGINNER'
    };
  }

  cardStyles() {
    return {'background-image': 'url('+this.course.iconUrl+')'};
  }

}
