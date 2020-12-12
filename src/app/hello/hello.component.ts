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
  namesSelectedToDelete: string[] = [];

  onNameClick() {
    this.greet.emit("Hello guys");
  }

  addName() {
    this.addNameToArray(this.itemName, this.listName)
    this.itemName = "";
  }

  addNameToArray(name: string, array: Array<string>) {
    array.push(name);
  }

  delNameOfArray(name: string, array: Array<string>) {
    const index: number = array.indexOf(name);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  updateCheckedList(selectedItems: string[]) {
    this.namesSelectedToDelete = selectedItems;
  }

  delSelectedNames() {
    this.namesSelectedToDelete.forEach(name => {
      this.delNameOfArray(name, this.listName);
    });

    this.namesSelectedToDelete = [];
  }
}
