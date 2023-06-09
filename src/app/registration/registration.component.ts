import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChildRegistrationService } from '../child-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private service:ChildRegistrationService) { }

  form = new FormGroup({
    motherFirstName: new FormControl(),
    motherMiddleName: new FormControl(),
    motherSurName: new FormControl(),
    motherPhone: new FormControl(),
    fatherFirstName: new FormControl(),
    fatherMiddleName: new FormControl(),
    fatherSurName: new FormControl(),
    fatherPhone: new FormControl(),
    name: new FormControl(),
    birthDate: new FormControl(),
    birthPlace: new FormControl(),
    gender: new FormControl(),
    weight: new FormControl(),
    regNo: new FormControl(),
    ward: new FormControl(),
    district: new FormControl(),
    region: new FormControl()
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
