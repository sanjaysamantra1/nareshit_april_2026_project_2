import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter App] Increment');
export const decrement = createAction('[Counter App] Decrement');
export const reset = createAction('[Counter App] Reset');
