import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare function init_adminlte_theme();

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

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
