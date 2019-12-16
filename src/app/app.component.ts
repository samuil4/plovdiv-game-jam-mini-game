import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RepoServiceService, UserObject } from './repo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'plovdiv-game-jam-mini-game';
  public checkWinnerForm: FormGroup;
  public starred: UserObject[] = [];
  public winners: UserObject[] = [];
  public showAlreadyClaimedModal = false;
  public showClaimModal = false;
  public showNotStarredModal = false;


  constructor(private fb: FormBuilder, private repo: RepoServiceService) {
    this.checkWinnerForm =  this.fb.group({
      username: ['']
    });
  }

  ngOnInit() {
    this.winners = this.repo.winners;
    this.loadData();
  }

  public onSubmit() {
    if (this.checkWinnerForm.value.username) {
      const username = this.checkWinnerForm.value.username;
      this.loadData().add(() => {
        const result = this.starred.find((user) => {
          return user.username === username;
        });

        if (result) {
          const previousClaimed = this.winners.find((winner) => {
            return winner.username === username;
          });

          if (previousClaimed) {
            this.showAlreadyClaimedModal = true;
          } else {
            this.repo.addWinner(result);
            this.winners = this.repo.winners;
            this.showClaimModal = true;
          }
        } else {
          this.showNotStarredModal = true;
        }

        this.checkWinnerForm.reset();
      });
    }
  }

  public loadData() {
    return this.repo.readStarred().subscribe((data) => {
      this.starred = data;
    });
  }
  public onCloseAlreadyClaimedModalClick() {
    this.showAlreadyClaimedModal = false;
  }
  public onCloseClaimModalClick() {
    this.showClaimModal = false;
  }
  public onCloseNotStarredModalClick() {
    this.showNotStarredModal = false;
  }
}
