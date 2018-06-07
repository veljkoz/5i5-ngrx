import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TalkListComponent } from './talk-list/talk-list.component';
import { TalkInfoComponent } from './talk-info/talk-info.component';
import { TalkDataService } from './services/talk-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TalkListComponent,
    TalkInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TalkDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
