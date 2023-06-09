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
  searchName:string = "";

  constructor(private service:ChildRegistrationService, private router:Router) { }

  open(child:any) {
    this.selectedChild = child;
    localStorage.setItem('child', JSON.stringify(child));
    this.router.navigate(["/child"]);
  }

  search() {
    this.service.searchChild(this.searchName).subscribe(searchList => {
      this.children = searchList;
    });
  }

  ngOnInit(): void {
    this.service.getChildList().subscribe(list => {
      this.children = list;
    });
  }

}
