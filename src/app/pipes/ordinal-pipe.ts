import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value === null || value === undefined || isNaN(Number(value))) {
      return '';
    }
    const num = Math.abs(Number(value));
    const remainder10 = num % 10;
    const remainder100 = num % 100;
    if (remainder100 >= 11 && remainder100 <= 13) {
      return `${value}th`;
    }
    switch (remainder10) {
      case 1: return `${value}st`;
      case 2: return `${value}nd`;
      case 3: return `${value}rd`;
      default: return `${value}th`;
    }
  }
}
