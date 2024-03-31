import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeWithDate'
})
export class PipeWithDatePipe implements PipeTransform {

  transform(value: string): string {
    const currentDate = new Date().toLocaleDateString();
    return `${value} - ${currentDate}`;
  }

}
