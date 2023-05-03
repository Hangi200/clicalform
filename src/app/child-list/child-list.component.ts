import { Component, OnInit, Output } from '@angular/core';
import { ChildRegistrationService } from '../child-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.scss']
})
export class ChildListComponent implements OnInit {

  children:any = [];
  @Output() selectedChild:any;

  constructor(private service:ChildRegistrationService, private router:Router) { }

  open(child:any) {
    this.selectedChild = child;
    this.router.navigate(["/child"])
  }

  ngOnInit(): void {
    this.service.getChildList().subscribe(list => {
      console.log(list);
      this.children = list;
    });
  }

}
