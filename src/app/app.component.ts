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
  title: string = 'firstStudy';

  showArray: Array<string>;

  // 최초 단 1번만 동작하는 함수
  constructor() {
    this.showArray = array;
  }

  public clickAfterPrint(): void {
    this._innerFunc();
    console.log(array);
    console.log(this.title);
  }

  private _innerFunc() {
    array.push('data' + array.length);
  }
}
