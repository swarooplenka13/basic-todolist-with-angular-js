import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
 @Input() todo: Todo = new Todo;
 @Input()
  i!: number;
 @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
 @Output() todoCheck: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("click has been triggerd")
  }
  oncheck(todo: Todo){
    this.todoCheck.emit(todo);
  }
}
