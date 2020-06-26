import { Injectable } from '@angular/core';

import { CapitalizePipe } from '../pipes/capitalize.pipe';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private capitalizePipe: CapitalizePipe) { }

    showMsgOkGenParam(msg: string): void {

      Swal.fire({
        title: 'Success!',
        text: this.capitalizePipe.transform(msg, false) + '!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

    }

  showMsgErrorGen(msg: string): void {

    Swal.fire({
      title: 'Error!',
      text: this.capitalizePipe.transform(msg, false) + '!',
      icon: 'error',
      confirmButtonText: 'Ok'
    });

  }

}
