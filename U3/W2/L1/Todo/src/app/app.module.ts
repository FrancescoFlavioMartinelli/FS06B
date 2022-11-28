import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListCompletedComponent } from './todo-list-completed/todo-list-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListCompletedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
