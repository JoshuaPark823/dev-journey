import { ContentService } from './services/content.service';
import { StateService } from './services/state.service';
import { ContentAPI } from './api/content.api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ViewMainComponent } from './components/view-main/view-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ViewMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    ContentAPI,
    ContentService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
