import { Component, OnInit } from '@angular/core';
import { GitServicesService } from '../../services/git.service';
import { GitInterface, Item } from '../../interfaces/git.interface';

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
  selector: 'github-git-search-page',
  templateUrl: './git-search-page.component.html',
  styles: [
  ]
})
export class GitSearchPageComponent implements OnInit {

  public arrayGits: Item[] = [];
  public arrayGitsForOtheEndPoint: string[] = [];
  public arrayGitsForOtheEndPointExecute: string[] = [];
  public arrayGits2: Object[] = [];
  public initialNumbers: number[] = [0,0,0,0,0,0,0,0,0,0];
  public initialNames: string[] = ['X','X','X','X','X','X','X','X','X','X'];

  constructor(
    private myServiceGit: GitServicesService
  ){}

  get obtengaArray(){
    return this.arrayGits;
  }


  searchBySearch( termn : string ): void{
    console.log("Desde GitSearchPageComponent");
    console.log({termn});
    this.myServiceGit.searchGit(termn)
      .subscribe( gits => {

        console.log(gits);

        //Lleno información
        for (let index = 0; index < 10; index++) {
          this.arrayGits.push(gits.items[index]);
          this.arrayGitsForOtheEndPoint.push(gits.items[index].url)

          console.log(gits.items[index].url.toString());

          //Nueva suscripción para guardar:
          let urlProfile = gits.items[index].url;
          this.myServiceGit.viewGitUrl(urlProfile)
            .subscribe( git => {
              console.warn(git) ;
              this.arrayGitsForOtheEndPointExecute = git;
              this.initialNumbers[index] = git.followers;
              this.initialNames[index] = git.name;
          });

        }

      })

    this.viewGraphic();
    console.log("------------------------");
    this.reviewArrayGits();
    console.log("------------------------");
    console.log("Me sali")

  }

  reviewArrayGits(): void{
    if(this.arrayGits){
      this.obtengaArray;
    }else{
      console.warn("No se que carajos esta pasando ...");
    }
  }

  public chartOptions!: ChartOptions;
  ngOnInit(): void {
    this.viewGraphic();
  }

  viewGraphic(){
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: this.initialNumbers
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
        categories: this.initialNames
      }
    }
  }

}
