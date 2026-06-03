import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = store.select((state: any) => state.countData); // Selector
    console.log(this.count$);
  }
  reset() {
    this.store.dispatch(reset());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  increment() {
    this.store.dispatch(increment());
  }
}
