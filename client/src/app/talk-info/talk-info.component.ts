import { Component, OnInit, Input } from '@angular/core';
import { Talk } from '../model/talk';
import { TalkDataService } from '../services/talk-data.service';

@Component({
  selector: 'app-talk-info',
  templateUrl: './talk-info.component.html',
  styleUrls: ['./talk-info.component.scss']
})
export class TalkInfoComponent implements OnInit {

  @Input() 
  talkData: Talk;
  
  constructor(private talkDataService: TalkDataService) { }

  ngOnInit() {
  }

  voteUp(){
    this.talkData = this.talkDataService.voteUp(this.talkData);
  }
}
