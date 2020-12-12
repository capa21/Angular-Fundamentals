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
  selName: string[] = [];

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
    for(let i = 0; i <= this.selName.length; i++) {
      this.delNameVector(this.listName, this.selName[i]);
    }
    this.selName = [];
  }

  delNameVector(vector:Array<string>, item:any) {
    const index: number = vector.indexOf(item);
    if (index !== -1) {
      vector.splice(index, 1);
    }
  }

  toogleSelName(checked:boolean, name:string) {

    if (checked) {
      this.selName.push(name);
    } else {
      this.delNameVector(this.selName, name);
    }
  }
}
