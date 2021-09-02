import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './mycomponent/about/about.component';
import { TodosComponent } from './mycomponent/todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'link', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
