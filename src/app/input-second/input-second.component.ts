import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class InputSecond implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-input-second',
  templateUrl: './input-second.component.html',
  styleUrls: ['./input-second.component.css']
})
export class InputSecondComponent{
emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);

matcher = new InputSecond();
}
