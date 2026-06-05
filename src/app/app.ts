import { Component, signal } from '@angular/core';
import { UnitTestingDemo } from './components/unit-testing-demo/unit-testing-demo';
import { Counter } from './components/counter/counter';
import { TodoCrud } from './components/todo-crud/todo-crud';
import { EmployeeList } from './components/employee-list/employee-list';
import { EmployeeAdd } from './components/employee-add/employee-add';

@Component({
  selector: 'app-root',
  imports: [
    // UnitTestingDemo,
    // Counter,
    // TodoCrud
    EmployeeList,
    EmployeeAdd
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('nareshit_april_2026_project_2');
}
