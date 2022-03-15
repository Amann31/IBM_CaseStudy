import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListComponent} from "../app/task-list/task-list.component";
import {UpdateTaskComponent} from "../app/update-task/update-task.component";
import {CreateTaskComponent} from "../app/create-task/create-task.component";
import {TaskDetailsComponent} from "../app/task-details/task-details.component";


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TaskListComponent },
  {path: 'create',component: CreateTaskComponent},
  { path: 'find/:uniqueTaskId', component: TaskDetailsComponent },
  { path: 'update/:uniqueTaskId', component: UpdateTaskComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
