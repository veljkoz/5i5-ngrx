import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalkDetailsComponent } from './talk-details/talk-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'details', component: TalkDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
