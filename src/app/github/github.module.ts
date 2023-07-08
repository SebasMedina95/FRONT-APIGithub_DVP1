import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';


import { GitSearchPageComponent } from './components/git-search-page/git-search-page.component';
import { GitPageComponent } from './components/git-page/git-page.component';
import { GitGenericComponent } from './components/git-generic/git-generic.component';
import { GithubRoutingModule } from './github-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GitTableResComponent } from './components/git-table-res/git-table-res.component';
import { ChartPageComponent } from './components/chart-page/chart-page.component';



@NgModule({
  declarations: [
    GitSearchPageComponent,
    GitPageComponent,
    GitGenericComponent,
    GitTableResComponent,
    ChartPageComponent,
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,

    GithubRoutingModule,
    SharedModule

  ]
})
export class GithubModule { }
