import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list-completed',
  templateUrl: './todo-list-completed.component.html',
  styleUrls: ['./todo-list-completed.component.scss']
})
export class TodoListCompletedComponent implements OnInit {

todos:Todo[]=[]

  constructor(private todoSrv:TodoService) { }

  ngOnInit(): void {
    this.todoSrv.getTodoFiltrati(true).then(res=>{
      this.todos=res
    })
  }

}
