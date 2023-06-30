import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
    public userName:string='Maryan Shutov';
    public sumOfTasks:number =0;
    public tasks:Array<object> =[];
    public setTask!:string;
    public isAdd:boolean = true;
    
    
    addTask(){
      this.tasks.push({task_name:this.setTask,status:false})
      this.isAdd = false;
      this.setTask = '';
      this.sumOfTasks = this.tasks.length
      
    }

    updateCount(){
      this.sumOfTasks = this.tasks.length
    }
}
