import { ContentService } from './services/content.service';
import { StateService } from './services/state.service';
import { ContentAPI } from './api/content.api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ViewMainComponent } from './components/view-main/view-main.component';
import { ExploreMainComponent } from './components/explore-main/explore-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ViewMainComponent,
    ExploreMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          baseUrl: ''
        }
      }
    })
  ],
  providers: [
    ContentAPI,
    ContentService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
