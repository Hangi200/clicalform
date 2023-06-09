import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() child:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
      this.router.navigate(["/registration"]);
  }

}
