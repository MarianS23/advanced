import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {
  @Input() taskList!:any;
  @Input() isAdded:boolean = true;
  @Output() deleteElem = new EventEmitter();
  public isUpdate:boolean = false;
  public updateField!:string;
  public isDone:boolean = false;
  public taskIndex!:number;

  updateTask(){
    this.taskList[this.taskIndex].task_name = this.updateField;
    this.updateField = '';
    this.isUpdate = false;
  }


  editTask(index:number){
    this.taskIndex = index;
    this.isUpdate = true;
    this.updateField = this.taskList[index].task_name;
  }

  deleteTask(index:number){
    this.taskList.splice(index,1)
    this.deleteElem.emit(true)
  }
}
 