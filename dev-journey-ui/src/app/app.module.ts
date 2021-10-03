import { ContentService } from './services/content.service';
import { StateService } from './services/state.service';
import { ContentAPI } from './api/content.api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ViewMainComponent } from './components/view-main/view-main.component';
import { WriteMainComponent } from './components/write-main/write-main.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ViewMainComponent,
    WriteMainComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule
  ],
  providers: [
    ContentAPI,
    ContentService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
