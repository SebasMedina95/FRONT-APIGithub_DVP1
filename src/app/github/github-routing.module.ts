import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitSearchPageComponent } from './components/git-search-page/git-search-page.component';
import { GitPageComponent } from './components/git-page/git-page.component';
import { GitGenericComponent } from './components/git-generic/git-generic.component';

const routes: Routes = [

  {
    path: 'git-search',
    component: GitSearchPageComponent
  },
  {
    path: 'git',
    component: GitPageComponent
  },
  {
    path: 'by/:id',
    component: GitGenericComponent
  },
  {
    path: '**',
    redirectTo: 'git-search'
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRoutingModule { }
