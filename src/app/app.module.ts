import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSqUiModule } from '@sq-ui/ng-sq-ui';

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    NgSqUiModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
