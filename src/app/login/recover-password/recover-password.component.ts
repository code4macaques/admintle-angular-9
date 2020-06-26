import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare function init_adminlte_theme();

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    init_adminlte_theme();
    this._document.querySelector('body').classList.add('login-page');
  }

  ngOnDestroy(): void {
    this._document.querySelector('body').classList.remove('login-page');
  }

}
