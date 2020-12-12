import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent {
  @Input() persons: string[];
  @Input() namesSelected: string[];
  @Output() namesSelectedUpdate: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() {}

  updateCheckedList(event: any) {
    const isCheckedName = event.target.checked;
    const itenName = event.target.value;
    
    if (isCheckedName) {
      this.addNameToArray(itenName, this.namesSelected);
    } else {
      this.delNameOfArray(itenName, this.namesSelected);
    }

    this.namesSelectedUpdate.emit(this.namesSelected);
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
}
