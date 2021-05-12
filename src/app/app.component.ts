import { Component } from '@angular/core';
//decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  constructor(){
   /*  setTimeout(() => {
      this.title="Changed Title"
    }, 2000); */
  }
}
