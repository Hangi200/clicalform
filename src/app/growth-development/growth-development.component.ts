
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ChildRegistrationService } from '../child-registration.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-growth-development',
  templateUrl: './growth-development.component.html',
  styleUrls: ['./growth-development.component.scss']
})
export class GrowthDevelopmentComponent implements OnInit {

  selectedChild:any;
  selectedChildString:any;
  data:any = [];
  response:any = [];

  constructor(private service:ChildRegistrationService) {
    this.selectedChildString = localStorage.getItem('child');
    this.selectedChild = JSON.parse(this.selectedChildString);
  }

  form = new UntypedFormGroup({
    arrivalDate: new UntypedFormControl(),
    commingDate: new UntypedFormControl(),
    childWeight: new UntypedFormControl()
  });

  submit() {
    var data = this.form.value;
    var id = this.selectedChild.regNo;
    this.service.saveGrowthDevelopment(data, id).subscribe(response => {
      if (response!=null) {
        this.loadChildGrowthDevelopments();
      }
    });
  }

  loadChildGrowthDevelopments() {
    let id = this.selectedChild.regNo;
    this.service.getGrowthDevelopment(id).subscribe(response => {
        this.data = response;
        console.log(this.data);
    });
  }

  ngOnInit(): void {
    this.loadChildGrowthDevelopments();
  }

}
