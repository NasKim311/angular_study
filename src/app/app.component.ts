import { Component } from '@angular/core';

const array: Array<string> = ['data0', 'data1', 'data2'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'firstStudy';

  showArray: Array<string>;

  constructor() {
    // -> 최초 단 1번만 동작하는 함수
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
