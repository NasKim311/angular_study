import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firstStudy';

  constructor() {
    // -> 최초 단 1번만 동작하는 함수
    console.log('동작');
  }
}
