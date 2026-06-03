import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-testing-demo',
  imports: [],
  templateUrl: './unit-testing-demo.html',
  styleUrl: './unit-testing-demo.css',
})
export class UnitTestingDemo {
  add(a: number, b: number) {
    return a + b;
  }

  isEven(num: number) {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }

  sumOfDigits(num: number) {
    let sum = 0;
    let rem;
    while (num != 0) {
      rem = num % 10;
      sum = sum + rem;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  cars = ['Tata', 'Honda', 'Maruti'];
  addNewCar(newCar: string) {
    this.cars.push(newCar);
  }

  processData(data: any) {
    console.log('Processing data:', data);
    return data.length;
  }
  fetchData() {
    const data = ['item1', 'item2', 'item3'];
    return this.processData(data);
  }
}
