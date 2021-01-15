import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-fundamentals';
  personList: string[] = ['Romelio', 'Fulano', 'Perenzejo'];

  onShowGreet(event:any) {
    console.log(event)
  }

  updateClass(lengthList: number) {
    return {
      'red': lengthList >= 2,
      'yellow': lengthList >= 3,
      'green': lengthList >= 4,
      'blue': lengthList >= 6
    }
  }
}
