import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from './auth';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
  <form #f="ngForm" (ngSubmit)="submit(f)">
    Email: <input type="text" #nome="ngModel" ngModel>
    Password: <input type="text" #nome="ngModel" ngModel>
    <button type="submit">invia</button>
  </form>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private authSrv: AuthService, private r:Router) { }

  ngOnInit(): void {
  }

  submit(f:NgForm) {
    let data:LoginRequest = {
      email: f.value.email,
      password: f.value.password
    }
    this.authSrv.login(data).subscribe(res=>{
      this.r.navigate(['/'])
    })
  }

}
