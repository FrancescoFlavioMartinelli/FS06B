import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { CardComponent } from '../card/card.component';
import { HttpClientModule } from '@angular/common/http';

const r: Routes = [
  {
    path: '', // photos/
    component: ListComponent
  }
]


@NgModule({
  declarations: [
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(r),
    HttpClientModule
  ]
})
export class ListModule { }
