import { Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';


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
  namesSelectedToDelete: string []= [];

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

  updateCheckedList(event: any) {
    console.log(event, 'event');
    const isCheckedName = event.target.checked;
    const itenName = event.target.value;
    if(isCheckedName){
      this.addNameToArray(itenName, this.namesSelectedToDelete);
    }else{
      this.delNameOfArray(itenName, this.namesSelectedToDelete);
    }
  }

  delSelectedNames() {
    this.namesSelectedToDelete.forEach(name  => {
      this.delNameOfArray(name, this.listName);
    });
    this.namesSelectedToDelete = [];
  }
}

/*build-in

. Atributos -> NgClass, NgStyle, NgModel
. Estructurales -> *NgForOf, *NgIf, *NgSwitch
*/
