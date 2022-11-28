import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from './../todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos:Todo[] = []

  constructor(private todoSrv:TodoService) {

  }

  ngOnInit(): void {

    this.todoSrv.getTodos().then((res:Todo[])=>{
      console.log(res)
      this.todos=res
    })
  }

getTestoPulsante(e:Todo):string{
  if(e.completed == true){
    return "elimina";
  }else{
    return "completa";
  }
}

}
