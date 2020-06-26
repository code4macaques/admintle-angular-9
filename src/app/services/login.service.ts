import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient ) { }

  login(user: string, password: string): Observable<boolean> {

    console.log(`========= LOGIN: user: ${user}, password: ${password} =========`);

    if( user === 'admin' && password === 'admin' ) {
      return of(true);
    }

    return of(false);
  }
}
