import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectKeysToArray'
})
export class ObjectKeysToArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(!value) { return null; }
    return Object.keys(value);
  }

}
