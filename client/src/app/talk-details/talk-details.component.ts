import { Component, OnInit, Input } from '@angular/core';
import { Talk } from '../model/talk';
import { TalkDataService } from '../services/talk-data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-talk-details',
  templateUrl: './talk-details.component.html',
  styleUrls: ['./talk-details.component.scss']
})
export class TalkDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private talkDataService: TalkDataService) { }

  talkData: Talk;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.talkDataService.getTalkDetails(id).subscribe(data => this.talkData = data);
  }

  public moveToScheduled(){
    this.talkData.scheduled = true;
    this.updateTalk();
  }

  public moveToPreparation(){
    this.talkData.scheduled = false;
    this.updateTalk();
  }

  private updateTalk(){
    this.talkDataService.updateTalk(this.talkData).subscribe(data => this.talkData = data);
  }
}
