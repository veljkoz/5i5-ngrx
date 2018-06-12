import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TalkListComponent } from './talk-list/talk-list.component';
import { TalkInfoComponent } from './talk-info/talk-info.component';
import { TalkDataService } from './services/talk-data.service';
import { AppRoutingModule } from './/app-routing.module';
import { TalkDetailsComponent } from './talk-details/talk-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { TalkEffects } from './effects/talks';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TalkListComponent,
    TalkInfoComponent,
    TalkDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    NoopAnimationsModule,

    MatInputModule,
    AppRoutingModule,

    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([TalkEffects])
  ],
  providers: [TalkDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
