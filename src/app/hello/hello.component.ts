import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'custom-hello',
  templateUrl: './hello.component.html',
  styleUrls:['./hello.component.css']
})
export class HelloComponent{
  @Input() name:string;
  @Output() greet:EventEmitter<string> = new EventEmitter<string>();

  listName: string[] = [];
  itemName: string = "";

  constructor() {
  }

  onNameClick() {
    this.greet.emit("Hello guys");
  }

  addName() {
    this.listName.push(this.itemName);
    console.log(this.listName);
    this.itemName = "";
  }
  delName() {
    const index: number = this.listName.indexOf(this.itemName);
    if (index !== -1) {
        this.listName.splice(index, 1);
    }
  }
}
