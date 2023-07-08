import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../interfaces/git.interface';
import { GitServicesService } from '../../services/git.service';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'git-chart-page',
  templateUrl: './chart-page.component.html',
  styles: [
  ]
})
export class ChartPageComponent implements OnInit {

  public resultLocalStorage: string[] = [];

  constructor(
    private myServiceGit: GitServicesService
  ){

  }

  @Input()
  public gits: Item[] = [];

  @Input()
  public prueba: number[] = [];

  public chartOptions!: ChartOptions

  viewGraphic(){
    this.chartOptions = {
      series: [
        {
          name: "basic",
          // data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
          data: this.prueba
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany"
        ]
      }
    }
  }

  ngOnInit(): void {

    this.viewGraphic();

  // constructor() {

  //   this.chartOptions = {
  //     series: [
  //       {
  //         name: "basic",
  //         data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  //       }
  //     ],
  //     chart: {
  //       type: "bar",
  //       height: 350
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: true
  //       }
  //     },
  //     dataLabels: {
  //       enabled: false
  //     },
  //     xaxis: {
  //       categories: [
  //         "South Korea",
  //         "Canada",
  //         "United Kingdom",
  //         "Netherlands",
  //         "Italy",
  //         "France",
  //         "Japan",
  //         "United States",
  //         "China",
  //         "Germany"
  //       ]
  //     }
  //   };

  }

}
