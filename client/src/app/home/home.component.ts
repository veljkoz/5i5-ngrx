import { Component, OnInit } from '@angular/core';
import { Talk } from '../model/talk';
import { TalkDataService } from '../services/talk-data.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { TalksState, selectPrepared, selectScheduled } from '../reducers/talks';
import { Store, select } from '@ngrx/store';
import { DoApplyFilter } from '../actions/talks';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formGroup = new FormGroup({
    filter: new FormControl()
  });

  schedTalks$: Observable<Array<Talk>>;
  prepTalks$: Observable<Array<Talk>>;

  constructor(private store: Store<TalksState>) { }

  ngOnInit() {

    this.schedTalks$ = this.store.pipe(select(selectScheduled));
    this.prepTalks$ = this.store.pipe(select(selectPrepared));

    this.formGroup.valueChanges.debounceTime(500).subscribe((value) => {
      this.store.dispatch(new DoApplyFilter({ filter: value.filter }));
      console.log("searching for '" + JSON.stringify(value.filter) + "'...");
    });

    //this got triggered in the effects upon initialization, but if we wanted to we could do it here:
    //this.store.dispatch(new DoGetAllTalks());
  }
}
