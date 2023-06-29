import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ChildRegistrationService } from '../child-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vitamin',
  templateUrl: './vitamin.component.html',
  styleUrls: ['./vitamin.component.scss']
})
export class VitaminComponent implements OnInit {

  selectedMonth:number = 0;
  selectedChild:any;
  selectedchildString:any;
  response:any;
  week6:any;
  week12:any;
  week18:any;
  week24:any;
  week30:any;
  week36:any;
  week42:any;
  week48:any;
  week54:any;

  constructor(private service:ChildRegistrationService, private router:Router) {
    this.selectedchildString = localStorage.getItem('child');
    this.selectedChild = JSON.parse(this.selectedchildString);
    
  }
  backToRegistration() {
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {
    this.loadMedications();
  }

  form = new UntypedFormGroup({
    week: new UntypedFormControl(),
    mouthDrop: new UntypedFormControl(),
    mouthPill: new UntypedFormControl()
  });

  onSelectedChange() {
    this.selectedMonth = parseInt(this.form.value.week);

    if (this.selectedMonth == 6) {
      this.form.get('mouthPill')?.disable();
    } else {
      this.form.get('mouthPill')?.enable();
    }
  }

  save() {
    this.form.value.week = parseInt(this.form.value.week);
    this.form.value.mouthDrop = this.form.value.mouthDrop?1:0;
    this.form.value.mouthPill = this.form.value.mouthPill?1:0;
    let data = this.form.value;
    this.service.registerMedication(data).subscribe(response => {
      
      if (response!=null) {
        this.loadMedications();
        return;
      }

      alert("Error");

    });
  }

  loadMedications() {
    this.service.getMedications(this.selectedChild.regNo).subscribe(response => {
      this.response = response;
      var six: any, twelve:any, eight: any, tfour: any, thirty:any, tsix: any, ftwo:any, feight:any, ffour:any;
      this.response.forEach(function(ob:any){
        var object = {
          "id": ob.id,
          "week": ob.week,
          "mouthDrop": ob.mouthDrop,
          "mouthPill": ob.mouthPill
        }

        switch(parseInt(ob.week)) {
          case 6:
            six = object; break;

          case 12:
            twelve = object; break;

          case 18:
            eight = object; break;

          case 24:
            tfour = object; break;

          case 30:
            thirty = object; break;

          case 36:
            tsix = object; break;

          case 42:
            ftwo = object; break;

          case 48:
            feight = object; break;

          case 54:
            ffour = object; break;
        }
      });

      this.week6 = six;
      this.week12 = twelve;
      this.week18 = eight;
      this.week24 = tfour;
      this.week30 = thirty;
      this.week36 = tsix;
      this.week42 = ftwo;
      this.week48 = feight;
      this.week54 = ffour;
    });
  }

}
