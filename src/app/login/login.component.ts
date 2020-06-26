import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { LoginService } from '../services/login.service';
import { UtilsService } from '../services/utils.service';

declare function init_adminlte_theme();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private loginService: LoginService,
    private router: Router,
    private utilsService: UtilsService ) { }

  ngOnInit(): void {
    init_adminlte_theme();
    this._document.querySelector('body').classList.add('login-page');
  }

  ngOnDestroy(): void {
    this._document.querySelector('body').classList.remove('login-page');
  }

  login(user: string, password: string) {

    if ( !user || !password ) {
      this.utilsService.showMsgErrorGen( 'password or username missing!' );
      return;
    }

    this.loginService.login(user, password).subscribe(
      res => {
        if (res) {
          this.utilsService.showMsgOkGenParam( `Wellcome ${user}` );
          this.router.navigate(['/dashboard']);
        } else {
          this.utilsService.showMsgErrorGen('User or pasword wrong!');
        }
      }
    );

  }




}
