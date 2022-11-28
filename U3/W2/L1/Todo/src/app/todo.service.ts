import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){
    return fetch("http://localhost:3000/todos")
    .then((res):Promise<Todo[]>=>res.json())
  }

getTodoFiltrati(c:boolean=false){
  return this.getTodos().then(res=>{
    return res.filter(e=>e.completed==c)
  })
}
}
