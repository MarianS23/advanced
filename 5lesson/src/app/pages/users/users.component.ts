import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public users: any = [];
  public userLogin: string = '';
  public userPassword: string = '';
  public userEmail: string = '';
  public userForm: any;
  public setUserInfoForm: any;
  public isAdded: boolean = false;
  public isDelete: boolean = false;
  public isActive = false;
  public userIndex!: number;




  addUser() {
    this.users.push({ login: this.userLogin, password: this.userPassword, email: this.userEmail });
    this.userLogin = '';
    this.userPassword = '';
    this.userEmail = '';
  }

  update() {
    this.users[this.userIndex].login = this.userLogin;
    this.users[this.userIndex].password = this.userPassword;
    this.users[this.userIndex].email = this.userEmail;
    this.userLogin = '';
    this.userPassword = '';
    this.userEmail = '';
    this.isActive = false;
  }

  delete(index: number): void {
    this.users.splice(index, 1)
  }

  editUser(index: number) {
    this.userLogin = this.users[index].login;
    this.userPassword = this.users[index].password;
    this.userEmail = this.users[index].email;
    this.userIndex = index;
    this.isActive = true;
  }
}
