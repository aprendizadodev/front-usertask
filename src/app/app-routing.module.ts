import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';

import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

const routes: Routes = [
{ path: '', redirectTo: 'tuto', pathMatch: 'full' },
{ path: 'user_list', component: UserListComponent },
{ path: 'user/:id', component: UserDetailsComponent },
{ path: 'user_add', component: AddUserComponent },
{ path: 'task_list', component: TaskListComponent },
{ path: 'task/:id', component: TaskDetailsComponent },
{ path: 'task_add', component: AddTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
