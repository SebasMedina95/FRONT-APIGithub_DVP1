import { Component } from '@angular/core';
import { GitServicesService } from '../../services/git.service';
import { Item } from '../../interfaces/git.interface';

@Component({
  selector: 'github-git-page',
  templateUrl: './git-page.component.html',
  styles: [
  ]
})
export class GitPageComponent {

  public theGit!: any;

  constructor(
    private myServiceGit: GitServicesService
  ){}

  searchByUser( termn : string ): void{
    console.log("Desde GitPageComponent");
    console.log({termn});
    this.myServiceGit.viewGitPartialUrl(termn)
      .subscribe( gits => {
        console.log(gits);
        this.theGit = gits;
      })

  }

}
