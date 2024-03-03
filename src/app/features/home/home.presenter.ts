import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class HomePresenter {
  public form!: FormGroup;

  public constructor(public fb: FormBuilder) {

  }
}
