import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { GitInterface, Item, GitInterfaceCache } from '../interfaces/git.interface';

@Injectable({
  providedIn: 'root'
})
export class GitServicesService {

  private apiSearchUrl: string = 'http://localhost:80/api-github';
  private apiSearchPartial: string = 'https://api.github.com/users';

  // public cacheStorage: GitInterface | GitInterfaceCache = {
  //   bySearch:   { term: '', gitsArrayCache: [] }
  // }

  constructor(
    private myHttpClient: HttpClient
  ) { }

  searchGit( query: string ): Observable<GitInterface>{

    const url = `${this.apiSearchUrl}/${query}`;
    return this.myHttpClient.get<GitInterface>(url)
      .pipe(
        tap( gitTaps => {
          localStorage.removeItem('cacheStorage');
          localStorage.setItem('cacheStorage', JSON.stringify(gitTaps));
        }),
      )
    // return this.myHttpClient.get<GitInterface>(`${this.apiSearchUrl}/${query}`);

  }

  viewGitUrl( query: string ): Observable<any>{
    return this.myHttpClient.get<any>(query);

  }

  viewGitPartialUrl( query: string ): Observable<any>{
    const url = `${this.apiSearchPartial}/${query}`;
    return this.myHttpClient.get<any>(url);

  }

}
