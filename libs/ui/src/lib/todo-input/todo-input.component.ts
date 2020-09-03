import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'trellis-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Output() newTodo: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(text: HTMLInputElement) {
    if(text.value) {
      // if the To-Do has a title, create it
      this.newTodo.emit(text.value);
      text.value = '';
    }
    else {
      //if the To-Do does not have a title, do not create it and alert the user 
      alert('Please enter Todo title');
    }
  }
}
