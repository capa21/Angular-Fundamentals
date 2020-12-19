import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent{
  @Input() listName: string[] = [];
  @Output() nameSelected: EventEmitter<any> = new EventEmitter();

    onNameSelected(event: any) {
      this.nameSelected.emit(event);
    }
  }
