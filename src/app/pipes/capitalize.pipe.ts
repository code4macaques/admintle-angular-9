import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform( value: string, todas: boolean = true ): string {

    value = value.toLocaleLowerCase();
    let names = value.split(' ');

    if ( todas ) {
      names = names.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      });
    } else {
      names[0] = names[0][0].toUpperCase() + names[0].substr(1);
    }

    return names.join(' ');

  }

}
