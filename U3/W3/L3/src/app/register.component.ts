import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from './auth';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  template: `
    <form #f="ngForm" (ngSubmit)="submit(f)">
      Nome: <input type="text" #nome="ngModel" ngModel>
      Email: <input type="text" #nome="ngModel" ngModel>
      Password: <input type="text" #nome="ngModel" ngModel>
      <button type="submit">invia</button>
    </form>
  `,
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor(private authSrv: AuthService, private r:Router) { }

  ngOnInit(): void {
  }

  submit(f:NgForm) {
    if(f.valid){
      let data:RegisterRequest = {
        email: f.value.email,
        password: f.value.password,
        nome: f.value.nome
      }

      this.authSrv.register(data).subscribe(res=>{
        this.r.navigate(['login'])
      })

    }
  }

}
