import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedSubj = new BehaviorSubject<boolean>(false);
  
  constructor(private http:HttpClient) { }
  
  register(data: RegisterRequest) {
    return this.http.post<RegisterResponse>("http://localhost:3000/signup", data)
  }

  login(data: LoginRequest) {
    return this.http.post<LoginResponse>("http://localhost:3000/login", data).pipe(tap((res)=>{
      localStorage.setItem("token", res.accessToken)
      this.loggedSubj.next(true)
    }))
  }

  logout() {
    localStorage.removeItem("token")
    this.loggedSubj.next(false)
  }

  getLoggedObs() {
    return this.loggedSubj.asObservable()
  }

}