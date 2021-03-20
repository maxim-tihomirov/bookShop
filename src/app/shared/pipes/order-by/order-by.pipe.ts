import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: unknown[], field: string, isSortReverse = true): unknown {
    this.sort(value, field, isSortReverse);
    return value;
  }

  sort(value: unknown[], field: string, isSortReverse = true): void {
    const filedArr = field.split('.');
    value.map((v) => {
      console.log(this.readProperty(v, filedArr.reverse()));
      return null;
    });
  }

  readProperty(obj: unknown, field: string[] | string): unknown {
    if (Array.isArray(field) && field.length) {
      return this.readProperty(obj[field.pop()], field);
    }
    if (typeof field === 'string') {
      return obj[field];
    }
    return obj;
  }
}
