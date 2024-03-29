import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string
  desc:string
  @Output() todoadd:EventEmitter<Todo>=new EventEmitter();
  onSubmit(){
    const todo={
      sno:1,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoadd.emit(todo)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
