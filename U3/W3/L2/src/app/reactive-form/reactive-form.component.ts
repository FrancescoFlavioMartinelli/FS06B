import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  f!:FormGroup

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.f = this.fb.group({
      nome: new FormControl("nome"),
      alterego: ["alterego"],
      poteri: this.fb.array([])
    },{
      validators: Validators.required
    })
  }

  getFormControl(n:string) {
    return this.f.get(n) as AbstractControl
  }
  getFormArray(n:string) {
    return (this.f.get(n) as FormArray).controls
  }

  getFormControlErrors(n:string) {
    return this.f.get(n)?.errors
  }
  aggiugninPotere() {
    let potere = new FormControl("potere", [Validators.required, Validators.minLength(3)]);
    // this.getFormArray("poteri").push(potere)
    (this.f.get("poteri") as FormArray).push(potere);
  }

}
