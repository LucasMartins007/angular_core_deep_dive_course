import { Component } from '@angular/core';

@Component({
  selector: 'app-root-test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: 'angular 15 deep dive course'
  }

  onLogoClicked() {
    alert('Hello Angular');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  } 
}
