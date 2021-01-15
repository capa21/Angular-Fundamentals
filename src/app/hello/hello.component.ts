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
  openedToast:boolean = true;

  onNameClick() {
    this.greet.emit("Hello guys");
  }

  addName() {
    this.addNameToArray(this.itemName, this.listName)
    this.itemName = "";
  }

  addNameToArray(name: string, array: Array<string>) {
    array.push(name);
    this.openedToast = true;
  }

  delNameOfArray(name: string, array: Array<string>) {
    const index: number = array.indexOf(name);
    if (index !== -1) {
      array.splice(index, 1);
      //this.openedToast = true;
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

  getInfo():string{
    let cant: number = this.listName.length;
    if(cant >= 1 && cant <= 4){
      return "info";
    }
    if(cant >= 5 && cant <= 10){
      return "warning";
    }
    if(cant > 10){
      return "error";
    }
  }

  getMensaje():string{
    let cant: number = this.listName.length;
    if(cant >= 1 && cant <= 4){
      return "El número de personas es aceptable";
    }
    if(cant >= 5 && cant <= 10){
      return "El número de personas está creciendo preocupantemente";
    }
    if(cant > 10){
      return "El número de personas no puede ser mayor a 10";
    }
  }

  closeToast(){
    this.openedToast = false;
  }
}

/*build-in

. Atributos -> NgClass, NgStyle, NgModel
. Estructurales -> *NgForOf, *NgIf, *NgSwitch
*/
