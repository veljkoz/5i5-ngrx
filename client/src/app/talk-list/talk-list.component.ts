import { Component, OnInit, Input } from '@angular/core';
import { Talk } from '../model/talk';

@Component({
  selector: 'app-talk-list',
  templateUrl: './talk-list.component.html',
  styleUrls: ['./talk-list.component.scss']
})
export class TalkListComponent implements OnInit {

  @Input() 
  talks: Array<Talk>;

  constructor() { }

  ngOnInit() {
  }
}
