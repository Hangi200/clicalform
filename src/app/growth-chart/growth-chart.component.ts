import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js';

@Component({
  selector: 'app-growth-chart',
  templateUrl: './growth-chart.component.html',
  styleUrls: ['./growth-chart.component.scss']
})
export class GrowthChartComponent implements OnInit {

  data: any = [
    { weight: 10, date: 10 },
    { weight: 20, date: 20 },
    { weight: 90, date: 30 },
    { weight: 60, date: 40 },
    { weight: 30, date: 50 },
    { weight: 70, date: 60 },
    { weight: 90, date: 70 },
  ];

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

  constructor() { }

  ngOnInit(): void {
    this.prepareConfigurations();
  }
}
