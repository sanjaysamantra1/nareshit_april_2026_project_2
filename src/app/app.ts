import { Component, signal } from '@angular/core';
import { UnitTestingDemo } from './components/unit-testing-demo/unit-testing-demo';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [
    // UnitTestingDemo,
    Counter,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('nareshit_april_2026_project_2');
}
