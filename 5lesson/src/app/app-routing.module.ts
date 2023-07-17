import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { WorksComponent } from './pages/works/works.component';
import { CenzorComponent } from './pages/cenzor/cenzor.component';
import { UsersComponent } from './pages/users/users.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'works',component:WorksComponent},
  {path:'cenzor',component:CenzorComponent},
  {path:'users',component:UsersComponent},
  {path:'tasks',component:TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
