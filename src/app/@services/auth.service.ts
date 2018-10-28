import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class AuthService {

  wpRestApiUrl = 'http://dev-angular-wp-poc.pantheonsite.io';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string ): Observable<any> {
      return this.http.post(`${this.wpRestApiUrl}/jwt-auth/v1/token`, {
        username: username,
        password: password
      }) as Observable<any>;
  }

}
