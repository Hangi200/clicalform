import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ChildRegistrationService } from '../child-registration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-immunization-record',
  templateUrl: './immunization-record.component.html',
  styleUrls: ['./immunization-record.component.scss']
})

export class ImmunizationRecordComponent implements OnInit {

  selectedWeek:number = 0;
  selectedChild:any;
  selectedChildString:any;
  response:any = [];
  week0:any;
  week1:any;
  week2:any;
  week3:any;
  week5:any;
  week6:any;



  constructor(private service:ChildRegistrationService, private router:Router) {
    this.selectedChildString = localStorage.getItem('child');
    this.selectedChild = JSON.parse(this.selectedChildString);
  }

  form = new UntypedFormGroup({
    week: new UntypedFormControl(100),
    bcg: new UntypedFormControl(),
    opv: new UntypedFormControl(),
    ipv: new UntypedFormControl(),
    dtp: new UntypedFormControl(),
    pcv13: new UntypedFormControl(),
    rotarix: new UntypedFormControl(),
    rubella: new UntypedFormControl(),
    child: new UntypedFormControl()
  });

  onSelectedChange() {
      this.selectedWeek = parseInt(this.form.value.week);
      switch(this.selectedWeek) {
        case 0:
          this.form.get('bcg')?.enable();
          this.form.get('opv')?.enable();
          this.form.get('ipv')?.disable();
          this.form.get('dtp')?.disable();
          this.form.get('pcv13')?.disable();
          this.form.get('rotarix')?.disable();
          this.form.get('surua')?.disable();
          break;

        case 6:
          this.form.get('bcg')?.disable();
          this.form.get('opv')?.enable();
          this.form.get('ipv')?.disable();
          this.form.get('dtp')?.enable();
          this.form.get('pcv13')?.enable();
          this.form.get('rotarix')?.enable();
          this.form.get('surua')?.disable();
          break;

        case 10:
          this.form.get('bcg')?.disable();
          this.form.get('opv')?.enable();
          this.form.get('ipv')?.disable();
          this.form.get('dtp')?.enable();
          this.form.get('pcv13')?.enable();
          this.form.get('rotarix')?.enable();
          this.form.get('surua')?.disable();
          break;

        case 14:
          this.form.get('bcg')?.disable();
          this.form.get('opv')?.enable();
          this.form.get('ipv')?.enable();
          this.form.get('dtp')?.enable();
          this.form.get('pcv13')?.enable();
          this.form.get('rotarix')?.disable();
          this.form.get('surua')?.disable();
          break;

        case 9:
          this.form.get('bcg')?.disable();
          this.form.get('opv')?.disable();
          this.form.get('ipv')?.disable();
          this.form.get('dtp')?.disable();
          this.form.get('pcv13')?.disable();
          this.form.get('rotarix')?.disable();
          this.form.get('surua')?.enable();
          break;

        case 18:
          this.form.get('bcg')?.disable();
          this.form.get('opv')?.disable();
          this.form.get('ipv')?.disable();
          this.form.get('dtp')?.disable();
          this.form.get('pcv13')?.disable();
          this.form.get('rotarix')?.disable();
          this.form.get('surua')?.enable();
          break;

        default:
          this.form.get('bcg')?.enable();
          this.form.get('opv')?.enable();
          this.form.get('ipv')?.enable();
          this.form.get('dtp')?.enable();
          this.form.get('pcv13')?.enable();
          this.form.get('rotarix')?.enable();
          this.form.get('surua')?.enable();
          break;
      }
  }

  backToRegistration() {
    this.router.navigate(["/"]);
  }

  submit() {
    var data = this.form.value;
    data.child = this.selectedChild;
    this.service.registerImmune(data).subscribe(res => {
      if (res!=null) {
        alert("Saved");
        this.form.reset();
        this.loadPriorImmunization();
        return;
      }
      alert("Error");
    });
  }

  getList() {
    this.service.getImmuneList().subscribe(res => console.log(res));
  }

  loadPriorImmunization() {
    this.service.getImmunesList(this.selectedChild.regNo).subscribe(response => {
      this.response = response;
      var zeroth: any, first:any, second:any, third:any,fifth:any, sixth:any;
      this.response.forEach(function(ob: any){
        var weekObject = {
          "week" : ob.week,
          "bcg" : ob.bcg,
          "opv" : ob.opv,
          "ipv" : ob.ipv,
          "dtp" : ob.dtp,
          "pcv13" : ob.pcv13,
          "rotarix" : ob.rotarix,
          "rubella" : ob.rubella
        };

        switch(parseInt(ob.week)) {
          case 0: zeroth = weekObject;
          break;

          case 6: first = weekObject;
          break;

          case 10: second = weekObject;
          break;

          case 14: third = weekObject;
          break;

          case 9: fifth = weekObject;
          break;

          case 18: sixth = weekObject;
          break;
        }

      });
      this.week0 = zeroth;
      this.week1 = first;
      this.week2 = second;
      this.week3 = third;
      this.week5 = fifth;
      this.week6 = sixth;
    });
  }

  ngOnInit(): void {
    this.loadPriorImmunization();
  }

}
