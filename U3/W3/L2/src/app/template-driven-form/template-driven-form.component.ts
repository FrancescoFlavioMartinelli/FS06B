import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  // @ViewChild("f") f!:NgForm

  constructor() { }

  ngOnInit(): void {
  }

  submit(f:NgForm) {
    if(f.valid) {
      console.log(f.value);
    }
  }


  getValid(i:NgModel) {
    if(i.touched) {
      if(i.valid) return ['is-valid']
      else return ['is-invalid']
    }
    return []
    
  }


}
