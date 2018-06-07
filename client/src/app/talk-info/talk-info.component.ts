import { Component, OnInit, Input } from '@angular/core';
import { Talk } from '../model/talk';

@Component({
  selector: 'app-talk-info',
  templateUrl: './talk-info.component.html',
  styleUrls: ['./talk-info.component.scss']
})
export class TalkInfoComponent implements OnInit {

  @Input() 
  talkData: Talk;
  
  constructor() { }

  ngOnInit() {
  }

  voteUp(){
    this.talkData.votesUp++;
  }

}
