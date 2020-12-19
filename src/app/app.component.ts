import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-fundamentals';
  personList: string[] = ['Romelio', 'Fulano', 'Perenzejo'];

  @Input()
  test:Number;

  onShowGreet(event:any) {
    console.log(event)
  }
}
