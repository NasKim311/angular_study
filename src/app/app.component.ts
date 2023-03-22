import { Component } from '@angular/core';

const array: Array<string> = ['data0', 'data1', 'data2'];

// key, value 형식의 내용
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// 각종 기능들
export class AppComponent {
  visible: boolean = false;
}
