import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Talk } from '../model/talk';
import { TalkDataService } from '../services/talk-data.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { TalksState } from '../reducers/talks';
import { DoVoteUp } from '../actions/talks';


@Component({
  selector: 'app-talk-info',
  templateUrl: './talk-info.component.html',
  styleUrls: ['./talk-info.component.scss']
})
export class TalkInfoComponent implements OnInit {
  @Input()
  talkData: Talk;
  
  constructor(private store: Store<TalksState>) { }

  ngOnInit() {
  }

  voteUp() {
    this.store.dispatch(new DoVoteUp({ talkId: this.talkData.id }));
  }
}
