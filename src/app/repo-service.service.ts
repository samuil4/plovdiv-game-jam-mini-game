import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export interface UserObject {
  username: string;
  starred_at: string;
}


@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  public winners: UserObject[];
  public starred: UserObject[];

  private url = 'https://api.github.com';

  constructor(protected httpClient: HttpClient) {
    this.loadAllStaredUsers();
    this.loadWinners();
  }

  public readStarred(): Observable<UserObject[]> {
    return this.httpClient.get(`${this.url}/repos/SQ-UI/ng-sq-ui/stargazers?per_page=100`, {
      headers: {
        Accept: 'application/vnd.github.v3.star+json'
      }
    }).pipe(map((data: any[]) => {
      const mappedUsers: UserObject[] = data.map(element => {
        return {
          username: element.user.login,
          starred_at: element.starred_at
        };
      });
      this.updateAllStarredUsers(mappedUsers);
      return mappedUsers;
    }), catchError(this.handleError([])));
  }

  public addWinner(winner: UserObject) {
    this.winners.push(winner);
    this.updateAllWinners();
  }

  private handleError<T>(result?: T) {

    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private updateAllStarredUsers(users: UserObject[]) {
    localStorage.setItem('ng-sq-ui-stars', JSON.stringify(users));
  }

  private updateAllWinners() {
    localStorage.setItem('ng-sq-ui-winners', JSON.stringify(this.winners));
  }

  private loadAllStaredUsers() {
    const allStarredusers = JSON.parse(localStorage.getItem('ng-sq-ui-winners'));
    if (allStarredusers) {
      this.starred = allStarredusers;
    } else {
      this.starred = [];
    }
  }

  private loadWinners() {
    const loadedWinners = JSON.parse(localStorage.getItem('ng-sq-ui-winners'));

    if (!loadedWinners) {
      this.winners = [];
      this.updateAllWinners();
    } else {
      this.winners = loadedWinners;
    }
  }
}
