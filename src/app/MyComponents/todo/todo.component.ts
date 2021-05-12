import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todos:Todo[];
  constructor() {
    this.todos=[
      {
        sno:1,
        title:"First Todo",
        desc:"This is my first todo",
        active:true
      },
      {
        sno:2,
        title:"Second Todo",
        desc:"This is my 2nd todo",
        active:true
      },
      {
        sno:3,
        title:"Third Todo",
        desc:"This is my Third todo",
        active:true
      },

    ]
   }

  ngOnInit(): void {
  }

}
