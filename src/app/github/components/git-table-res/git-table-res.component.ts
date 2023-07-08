import { Component, Input } from '@angular/core';
import { Item } from '../../interfaces/git.interface';

@Component({
  selector: 'github-git-table-res',
  templateUrl: './git-table-res.component.html',
  styles: [
    `img {
      width: 70px;
    }`
  ]
})
export class GitTableResComponent {

  @Input()
  public gits: Item[] = [];

}
