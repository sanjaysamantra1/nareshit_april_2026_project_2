import { Component, signal } from '@angular/core';
import { UnitTestingDemo } from './components/unit-testing-demo/unit-testing-demo';

@Component({
  selector: 'app-root',
  imports: [
    UnitTestingDemo
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nareshit_april_2026_project_2');
}
