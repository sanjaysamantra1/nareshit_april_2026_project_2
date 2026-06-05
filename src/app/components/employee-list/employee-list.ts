import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchEmployees } from '../../actions/employee.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [
    CommonModule
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employees$: Observable<Employee[]> | undefined;

  constructor(private store: Store) {
    this.employees$ = this.store.select((state:any) => {
      console.log(state);
      return state.employeeData
    });
  }
  ngOnInit() {
    // this.store.dispatch({ type: '[EmployeeList Page] Fetch Employees' });
    this.store.dispatch(fetchEmployees());
  }
}
