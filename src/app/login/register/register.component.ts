import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare function init_adminlte_theme();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    init_adminlte_theme();
    this._document.querySelector('body').classList.add('register-page');
  }

  ngOnDestroy(): void {
    this._document.querySelector('body').classList.remove('register-page');
  }


  register(): void {
    console.log(`======== register ========`);
  }

}
