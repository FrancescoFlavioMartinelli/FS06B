import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailsPage } from '../pages/users-details.page';

const rUsers: Routes = [
  { path: ':id', component: UsersDetailsPage}
]

@NgModule({
  declarations: [
    UsersDetailsPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rUsers)
  ]
})
export class UserModule { }
