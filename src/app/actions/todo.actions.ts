import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const addTodo = createAction('Add ToDo', props<{ newToDo: Todo }>());
export const deleteTodo = createAction('Delete ToDo', props<{ id:number }>());
export const toggleTodo = createAction('Toggle ToDo', props<{ id:number }>());
