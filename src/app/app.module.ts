import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSqUiModule } from '@sq-ui/ng-sq-ui';

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { CollapseContentComponent } from './app-collapse-content/app-collapse-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    CollapseContentComponent,
  ],
  imports: [
    BrowserModule,
    NgSqUiModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
