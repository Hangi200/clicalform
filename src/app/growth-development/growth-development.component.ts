import { Component } from '@angular/core';

@Component({
  selector: 'app-growth-development',
  templateUrl: './growth-development.component.html',
  styleUrls: ['./growth-development.component.scss']
})
export class GrowthDevelopmentComponent {
  forms: any[] = [];

  addForm() {
    this.forms.push({});
  }

  removeForm(form: any) {
    const index = this.forms.indexOf(form);
    if (index !== -1) {
      this.forms.splice(index, 1);
    }
  }
}
