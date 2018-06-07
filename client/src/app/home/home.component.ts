import { Component, OnInit } from '@angular/core';
import { Talk } from '../model/talk';
import { TalkDataService } from '../services/talk-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  scheduledTalks: Array<Talk>;
  preparationTalks: Array<Talk>;

  constructor(private talkDataService: TalkDataService) { }

  ngOnInit() {
    this.scheduledTalks = this.talkDataService.getScheduledTalks();
    this.preparationTalks = this.talkDataService.getPreparedTalks();
  }
}
