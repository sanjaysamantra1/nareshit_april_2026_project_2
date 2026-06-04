import { counterReducer } from '../reducers/counter.reducer';
import { todoReducer } from '../reducers/todo.reducer';

export const myStore = {
  countData: counterReducer,
  todoData: todoReducer,
};
