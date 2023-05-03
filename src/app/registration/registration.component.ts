import { Component, OnInit } from '@angular/core';
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
    motherName: new FormControl(),
    fatherName: new FormControl(),
    address: new FormControl(),
    phoneNo: new FormControl(),
    name: new FormControl(),
    birthDate: new FormControl(),
    birthPlace: new FormControl(),
    gender: new FormControl(),
    weight: new FormControl(),
    regNo: new FormControl()
  });
 

  ngOnInit(): void {}

  submit() {
    let data = this.form.value;
    console.log(data);
    this.service.registerChild(data).subscribe(response => {
      alert("Registration successful");
      this.router.navigate(["/immunization"]);
    });
  }

}
