import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  public winners: string[];
  public oldStars: string[];
  public newStars: string[];

  constructor() {
    const loadedWinners = JSON.parse(localStorage.getItem('ng-sq-ui-winners'));

    if (!loadedWinners) {
      this.winners = [];
      localStorage.setItem('ng-sq-ui-winners', JSON.stringify(this.winners));
    } else {
      this.winners = loadedWinners;
    }
  }
}
