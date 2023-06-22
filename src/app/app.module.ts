import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './registration/registration.component';
import { ImmunizationRecordComponent } from './immunization-record/immunization-record.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ChildListComponent } from './child-list/child-list.component';
import { ChildDetailsComponent } from './child-details/child-details.component';
import { VitaminComponent } from './vitamin/vitamin.component';
import { GrowthDevelopmentComponent } from './growth-development/growth-development.component';
import { GrowthChartComponent } from './growth-chart/growth-chart.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'child_list', component: ChildListComponent },
    { path: 'registration', component: RegistrationComponent }
  ] },
  { path: 'child', component: ChildDetailsComponent, children: [
    { path: 'immunization', component: ImmunizationRecordComponent },
    { path: 'vitamin', component: VitaminComponent },
    { path: 'growth_development', component: GrowthDevelopmentComponent }
  ] }
];


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    ChildListComponent,
    ChildDetailsComponent,
    VitaminComponent,
    GrowthDevelopmentComponent,
    ImmunizationRecordComponent,
    GrowthChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
