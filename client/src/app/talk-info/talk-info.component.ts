import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Talk } from '../model/talk';
import { TalkDataService } from '../services/talk-data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-talk-info',
  templateUrl: './talk-info.component.html',
  styleUrls: ['./talk-info.component.scss']
})
export class TalkInfoComponent implements OnInit, OnDestroy {
  @Input() 
  talkData: Talk;


  private voteUp$: Subscription;
  
  constructor(private talkDataService: TalkDataService) { }
  ngOnDestroy(): void {
    if (this.voteUp$){
      this.voteUp$.unsubscribe();
    }
  }

  ngOnInit() {
  }

  voteUp(){
    this.talkDataService.voteUp(this.talkData).subscribe(o => {
      this.talkData = o;
    });
  }
}
