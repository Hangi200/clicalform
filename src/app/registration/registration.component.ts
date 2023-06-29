import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChildRegistrationService } from '../child-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private service:ChildRegistrationService) { }

  form = new UntypedFormGroup({
    motherFirstName: new UntypedFormControl(),
    motherMiddleName: new UntypedFormControl(),
    motherSurName: new UntypedFormControl(),
    motherPhone: new UntypedFormControl(),
    fatherFirstName: new UntypedFormControl(),
    fatherMiddleName: new UntypedFormControl(),
    fatherSurName: new UntypedFormControl(),
    fatherPhone: new UntypedFormControl(),
    name: new UntypedFormControl(),
    birthDate: new UntypedFormControl(),
    birthPlace: new UntypedFormControl(),
    gender: new UntypedFormControl(),
    weight: new UntypedFormControl(),
    regNo: new UntypedFormControl(),
    ward: new UntypedFormControl(),
    district: new UntypedFormControl(),
    region: new UntypedFormControl()
  });
 

  ngOnInit(): void {}

  submit() {
    let data = this.form.value;

    this.service.registerChild(data).subscribe(response => {
      alert("Registration successful");
      this.form.reset();
    });
  }

}
