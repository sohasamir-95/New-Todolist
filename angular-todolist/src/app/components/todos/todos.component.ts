import { Component, OnInit } from '@angular/core';
import { Todo} from '../../models/Todo'
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todo[];
  constructor( private todoservice:TodoService) { }

  ngOnInit(){
   this.todoservice.getTodos().subscribe(
     todos=>{
     this.todos=todos
        });
  
 
  }
  deleteTodo(todo:Todo)
  {
    //Remove from UI
    this.todos=this.todos.filter(t=> t.id !==todo.id);
    //Remove from server
    this.todoservice.deleteTodo(todo).subscribe();

   
    console.log('delete me')
  }
  addTodo(todo:Todo)
  {
this.todoservice.addTodo(todo).subscribe(todo=>{
  this.todos.push(todo);
  console.log('Added me')


});
  }

}
