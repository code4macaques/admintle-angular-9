import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare function init_dashboard();
declare function init_demo_adminlte();
declare function init_adminlte_theme();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {
    const body = this._document.querySelector('body');
    body.classList.add('sidebar-mini');
    body.classList.add('layout-fixed');

    init_dashboard();
    init_demo_adminlte();
    init_adminlte_theme();
  }

  ngOnDestroy(): void {
    const body = this._document.querySelector('body');
    body.classList.remove('sidebar-mini');
    body.classList.remove('layout-fixed');
  }

}
