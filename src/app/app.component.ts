import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RepoServiceService } from './repo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'plovdiv-game-jam-mini-game';
  public checkWinnerForm: FormGroup;


  constructor(private fb: FormBuilder, private repo: RepoServiceService) {
    this.checkWinnerForm =  this.fb.group({
      username: ['']
    });
  }

  ngOnInit() {
    console.log(this.repo.winners);
  }

  onSubmit() {
    console.log(this.checkWinnerForm.value);
    if (this.checkWinnerForm.value.username) {

    }
  }
}
