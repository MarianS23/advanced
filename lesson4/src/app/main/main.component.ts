import { Component } from '@angular/core';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
//   public book: any = [{ firstName: "Ivan", lastName: "a", number: "0942223456" },
//   { firstName: "Max", lastName: "b", number: "0942223456" },
//   { firstName: "Stepan", lastName: "c", number: "0942456456" },
//   { firstName: "Mariya", lastName: "d", number: "0934223456" },
//   { firstName: "Oleksiy", lastName: "e", number: "094678956" },
//   { firstName: "Ira", lastName: "f", number: "0945323456" },
//   { firstName: "Volodja", lastName: "g", number: "094952456" }
// ]
  // public phoneBook: any = [];
  public searchField!: any;

  public index!: number;

  public firstName!: string;
  public lastName!: string;
  public number!: string;

  public isAddBtnClick: boolean = false;
  public isSaveBtnClick: boolean = false;
  public isEditBtnClick: boolean = false;

  public phoneBook: IContacts[] = [
    {
      firstName: "Max",
      lastName: "potato",
      number: "0942456456"
    },
    { firstName: "Stepan", lastName: "onion", number: "0942456456" },
    { firstName: "Mariya", lastName: "apple", number: "0934223456" },
    { firstName: "Oleksiy", lastName: "orange", number: "094678956" },
    { firstName: "Ira", lastName: "watermelon", number: "0945323456" },
    { firstName: "Volodja", lastName: "banana", number: "094952456" }
  ]

  constructor() {

  }
  clickAddBtn() {
    this.isAddBtnClick = true;
  }

  clickEditBtn(data: boolean) {
    this.isEditBtnClick = data;
  }

  clickSaveBtn() {
    this.phoneBook.push({ firstName: this.firstName, lastName: this.lastName, number: this.number })
    this.isAddBtnClick = false;
    this.firstName = '';
    this.lastName = '';
    this.number = '';

  }
  updateContact() {
    this.phoneBook[this.index].firstName = this.firstName;
    this.phoneBook[this.index].lastName = this.lastName;
    this.phoneBook[this.index].number = this.number;
    this.firstName = '';
    this.lastName = '';
    this.number = '';
    this.isAddBtnClick = false;
  }

  getIndexFromChild(e: number) {
    this.index = e;
    this.isAddBtnClick = true;
    this.firstName = this.phoneBook[e].firstName;
    this.lastName = this.phoneBook[e].lastName;
    this.number = this.phoneBook[e].number;
  }

  // addBook() {
  //   this.phoneBook = [...this.book];
  //   this.isAddBtnClick = false;
  // }


}

export interface IContacts {
  firstName: string,
  lastName: string,
  number: string
}
