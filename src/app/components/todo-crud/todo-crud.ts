import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteTodo, toggleTodo } from '../../actions/todo.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-crud',
  imports: [
    CommonModule
  ],
  templateUrl: './todo-crud.html',
  styleUrl: './todo-crud.css',
})
export class TodoCrud {
  todoArr$: Observable<any> | undefined;
  constructor(private store: Store) {
    this.todoArr$ = this.store.select((state: any) => state.todoData);
  }
  deleteMyTodo(id: number) {
    this.store.dispatch(deleteTodo({ id: id }));
  }
  toggleMyTodo(id: number) {
    this.store.dispatch(toggleTodo({ id: id }));
  }
}
