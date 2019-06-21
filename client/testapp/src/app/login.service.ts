import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private myurl = "http://localhost:3000/api"

  constructor(
    private router: Router,
    private http: HttpClient
  ) {  }

    register(data:any): Observable<any>{
      return this.http.post(this.myurl+'/register', data);
    }

    fetchs(): Observable<any>{
      return this.http.get(this.myurl+'/fetch');
    }

}
