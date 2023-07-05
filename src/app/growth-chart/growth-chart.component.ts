import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Chart, ChartType } from 'chart.js';
import { ChildRegistrationService } from '../child-registration.service';

@Component({
  selector: 'app-growth-chart',
  templateUrl: './growth-chart.component.html',
  styleUrls: ['./growth-chart.component.scss']
})
export class GrowthChartComponent implements OnInit {

  @Input() received: any = [];
  data: any = [];
  chart : Chart | undefined;


  selectedChildString:any;
  selectedChild:any;
  response:any = [];

  constructor(private service:ChildRegistrationService) {
    this.selectedChildString = localStorage.getItem('child');
    this.selectedChild = JSON.parse(this.selectedChildString);
  }


  prepareConfigurations() {
    const chartContainer = document.getElementById("chartContainer");

    const weights = this.data.map((entry: { weight: any; }) => entry.weight);
    const dates = this.data.map((entry: { date: any; }) => entry.date);

    const chartType: ChartType = 'line';

    const config = {
      type: chartType,
      data: {
        labels: dates,
        datasets: [
          {
            label: "Weight",
            data: weights,
            borderColor: "green",
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };

    const canvas = document.createElement("canvas");
    chartContainer?.appendChild(canvas);

    new Chart(canvas, config);
  }

  loadGrowthDevelopmentData() {
    console.log("Loaded");
      var dataBag: any = [];
      this.received.forEach(function(object: any) {
        let arrDate = object.arrivalDate;
        let weight = object.childWeight;
        dataBag.push({"weight" : weight, "date" : arrDate});
      });
      this.data = dataBag;
      //this.prepareConfigurations();
  }

  ngOnInit(): void {
    console.log(this.received);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.received && !changes.received.firstChange) {
      if (this.received.length > 0) {
        this.loadGrowthDevelopmentData();
        if (this.chart) {
          // If chart already exists, update the data
          const weights = this.data.map((entry: { weight: any; }) => entry.weight);
          const dates = this.data.map((entry: { date: any; }) => entry.date);
    
          this.chart.data.labels = dates;
          this.chart.data.datasets[0].data = weights;
          this.chart.update();
          console.log("update");
        } else {
          console.log(this.received);
          // If chart does not exist, create a new chart
          const chartContainer = document.getElementById("chartContainer");

          const weights = this.data.map((entry: { weight: any; }) => entry.weight);
          const dates = this.data.map((entry: { date: any; }) => entry.date);

          const chartType: ChartType = 'line';

          const config = {
            type: chartType,
            data: {
              labels: dates,
              datasets: [
                {
                  label: "Weight",
                  data: weights,
                  borderColor: "blue",
                  fill: false
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false
            }
          };

          const canvas = document.createElement("canvas");
          chartContainer?.appendChild(canvas);
          canvas.style.width = "100%";
          this.chart = new Chart(canvas, config);
        }
      }
    }
  }

}
