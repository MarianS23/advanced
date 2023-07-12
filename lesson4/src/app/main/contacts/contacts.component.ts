import { Component,EventEmitter,Input, Output } from '@angular/core';
import { IContacts } from '../main.component';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  @Input() isSaveBtnClick!:boolean;
  @Input() phoneBook:any;
  @Input() searchField!:string;
  @Output() sendIndexToParent = new EventEmitter();
  @Output() sendBtnStatus = new EventEmitter();
  public sortType = 'asc';


  public sortfirstName (arrContacts: IContacts[], sortType: string): IContacts[] {
    if(!arrContacts) return [];
    if(!sortType) return arrContacts;
    if(sortType === 'asc') {
      this.sortType = 'desc'
      return arrContacts.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
    }
    this.sortType='asc'
    return arrContacts.sort((a, b) => (a.firstName < b.firstName) ?  1 : ((a.firstName > b.firstName) ? -1 : 0))
  }
  public sortLastName (arrContacts: IContacts[], sortType: string): IContacts[] {
    if(!arrContacts) return [];
    if(!sortType) return arrContacts;
    if(sortType === 'asc') {
      this.sortType = 'desc'
      return arrContacts.sort((a, b) => (a.lastName > b.firstName) ? 1 : ((a.lastName < b.lastName) ? -1 : 0))

    }
    this.sortType='asc'
    
    return arrContacts.sort((a, b) => (a.lastName < b.lastName) ?  1 : ((a.lastName > b.lastName) ? -1 : 0))
  }
  public sortNumber (arrContacts: IContacts [], sortType: string): IContacts[] {
    if(!arrContacts) return [];
    if(!sortType) return arrContacts;
    if(sortType === 'asc') {
      this.sortType = 'desc'
      return arrContacts.sort((a, b) => (a.number > b.number) ? 1 : ((a.number < b.number) ? -1 : 0))
    }
    this.sortType='asc'
    return arrContacts.sort((a, b) => (a.number < b.number) ?  1 : ((a.number > b.number) ? -1 : 0))
  }

  clickDeleteBtn(index:number):void{
    this.phoneBook.splice(index,1);
  }

  clickEditBtn(index:number):void{
    this.sendIndexToParent.emit(index);
    this.sendBtnStatus.emit(true);
  }
}
