import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router'
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private _router: Router) { }

  public signIn(user: any): Observable<any> {
    var result: any;
    var data: any;
    let res;
    // return this.httpClient.post(`${environment.server}/ajjm/user/login`, user).pipe(

    //   map(res => {
    //     return res;
    //   },
    //     catchError(err => {
    //       return throwError(err);
    //     }))
    // );

    if(JSON.parse(user).password == '1234' ){
    res = JSON.stringify({ result: JSON.stringify({ code: 200, message: 'OK' }), data: JSON.stringify({ email: JSON.parse(user).email, nivel: 0 }) })
    } else{
    res = JSON.stringify({ result: JSON.stringify({ code: 400, message: 'OK' }), data: JSON.stringify({ email: JSON.parse(user).email, nivel: 0 }) })
    }
    result = JSON.parse(res).result;
    data = JSON.parse(res).data;

    var code = JSON.parse(result).code

    if (code == 200) {
      localStorage.setItem('user', data)
    }

    return result;
  }

  public getUser(): Observable<any> {
    var user: any
    user = localStorage.getItem('user');

    return user;
  }

  public logOut() {
    localStorage.removeItem('user');
    this._router.navigate(['/login'])
  }

}