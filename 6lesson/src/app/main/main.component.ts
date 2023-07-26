import { Component } from '@angular/core';
import { RegisterService } from '../services/register/register.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(
    private registerServise: RegisterService
  ) { }

  //connect with service
  public posts = this.registerServise.blogs;
  public users = this.registerServise.users;





  //логін та пароль адміна
  public adminLogin: string = 'admin';
  public adminPassword: string = '4321';

  //змінні що містять інформацію про користувача що залогінився
  public currentUser = '';
  public currentUserId!: number;


  //відкриває повідомлення про некоректні реєстраційні дані
  public incorrectMessege: boolean = false;

  //змінні полів реєстрації
  public regUserName!: string;
  public regUserEmail!: string;
  public regUserPassword!: string | number;

  //змінні полів входу
  public userEmail!: string;
  public userPassword!: string | number;

  //змінні полів добавлення посту
  public postTitle!: string;
  public postTopic!: string;

  //булеві змінні
  public loginSuccess: boolean = false;
  public signInPressed: boolean = false;
  public signUpPressed: boolean = false;
  public addPostPressed: boolean = false;
  public editPostPressed: boolean = false;



  //функції обробки кліків на кнопки
  clickSignInBtn() {
    this.signInPressed = true;
  }
  clickSignUpBtn() {
    this.signUpPressed = true;
  }
  clickSignOut() {
    this.loginSuccess = false;
    this.currentUser = '';
  }
  clickAddPostBtn() {
    this.addPostPressed = true;
  }
  closeSignInModal() {
    this.signInPressed = false;
    this.incorrectMessege = false;
    this.userEmail = '';
    this.userPassword = '';
  }
  closeSignUpModal() {
    this.signUpPressed = false;
    this.incorrectMessege = false;
    this.regUserName = '';
    this.regUserEmail = '';
    this.regUserPassword = '';
  }
  closeAddPostModal() {
    this.addPostPressed = false;
    this.incorrectMessege = false;
    this.postTitle = '';
    this.postTopic = '';
  }
  clickDeleteCurrentPost(index: number) {
    this.posts.splice(index, 1)
  }
  clickEditCurrentPost(index: number) {
    this.addPostPressed = true;
    this.postTitle = this.posts[index].title;
    this.postTopic = this.posts[index].topic;
    this.currentUserId = index;
    this.editPostPressed = true;
  }



  //функція обробки входу в акаунт
  signInSubmit(): any {
    let exist = [];
    if (this.userEmail == this.adminLogin) {
      if (this.userPassword == this.adminPassword) {
        this.currentUser = this.adminLogin;
        this.userEmail = '';
        this.userPassword = '';
        this.signInPressed = false;
        this.loginSuccess = true;
        this.incorrectMessege = false;
      } else {
        this.incorrectMessege = true;
      }
    } else {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].email == this.userEmail) {
          if (this.users[i].password == this.userPassword) {
            exist.push(this.users[i]);
          }
        }
      }
      if (exist.length > 0) {
        this.currentUser = exist[0].userName;
        exist = [];
        this.userEmail = '';
        this.userPassword = '';
        this.signInPressed = false;
        this.loginSuccess = true;
        this.incorrectMessege = false;
      } else {
        this.incorrectMessege = true;
      }
    }
  }


  //функція створеня юзера при реєстрації
  signUpSubmit() {
    let exist = true;
    this.users.forEach(elem => {
      if (elem.email.toLowerCase() === this.regUserEmail.toLowerCase() || elem.userName.toLowerCase() === this.regUserName.toLowerCase()) {
        alert('this user is exit')
        exist = false;
      }
    })
    if (exist) {
      this.users.push({ id: this.users.length + 1, userName: this.regUserName, email: this.regUserEmail, password: this.regUserPassword })
      this.currentUser = this.regUserName;
      this.regUserName = '';
      this.regUserEmail = '';
      this.regUserPassword = '';
      this.loginSuccess = true;
      this.signUpPressed = false;

    }
  }

  //створення посту
  postSubmit() {
    this.posts.push({ id: this.posts.length + 1, postedBy: this.currentUser, topic: this.postTopic, date: this.getCurrentDate(), title: this.postTitle })
    this.postTitle = '';
    this.postTopic = '';
    this.addPostPressed = false;
  }

  //збереження редагованого посту
  editSumbit() {
    this.posts[this.currentUserId].title = this.postTitle;
    this.posts[this.currentUserId].topic = this.postTopic;
    this.postTitle = '';
    this.postTopic = '';
    this.addPostPressed = false;
  }

  //функція отримує поточну дату
  getCurrentDate(): string {
    const date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let currentDate = [hours, ':', minutes, ', ', day, '.', month, '.', year];
    return currentDate.join('');
  }
}


