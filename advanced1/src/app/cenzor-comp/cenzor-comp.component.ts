import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor-comp',
  templateUrl: './cenzor-comp.component.html',
  styleUrls: ['./cenzor-comp.component.scss']
})
export class CenzorCompComponent {
  public wordsList: Array<string> = [];
  public list: string = '';
  public enterWord: string = '';
  public emptyTextField: string = '';
  public emptyWordField:string = ''
  public placeholderText: string = 'text here...';
  public placeholderWord: string = 'word here...';
  public cenzorField: string = '';


  isEmpty(): boolean {
    if (this.enterWord.length <= 0) {
      this.emptyWordField = 'redColorEmpty';
      this.placeholderWord = 'please fill the field';
      return false;
    } else {
      return true;
    }
  }

  addWord(): void {
    if (this.isEmpty()) {
      this.wordsList.push(this.enterWord);
      this.list = this.wordsList.toString();
      this.placeholderWord = 'word here...';
      this.emptyWordField = '';
      this.enterWord = '';
    }
  }


  star(n: any) {
    let res = "";
    for (let i = 0; i < n.length; i++) {
      res += "*";
    }
    return res;
  }


  cenzor(): void {
    if (this.cenzorField.length <= 0) {
      this.emptyTextField = 'redColorEmpty';
      this.placeholderText = 'please fill the field';
    } else {
      let result = this.cenzorField;
      for (let i = 0; i < this.wordsList.length; i++) {
        result = result.replace(new RegExp(this.wordsList[i], "g"), this.star(this.wordsList[i]));
        console.log(result);
      };
      this.cenzorField = result;
      this.emptyTextField = '';
      this.placeholderText = 'text here...';
    }
    
  }

  // if(enterText.value.length <=0){
  //   enterText.style.cssText = "outline:1px solid red";
  // }else{
  //   let result = enterText.value;
  //   for(let i = 0;i<badWords.length;i++){
  //       result = result.replace(new RegExp(badWords[i],"g"),star(badWords[i]));
  //       console.log(result);
  //   };
  //   enterText.value = result;
  // }




  reset(): void {
    location.reload();
  }

}
