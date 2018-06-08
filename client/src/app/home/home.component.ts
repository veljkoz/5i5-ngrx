import { Component, OnInit } from '@angular/core';
import { Talk } from '../model/talk';
import { TalkDataService } from '../services/talk-data.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formGroup = new FormGroup({
    filter: new FormControl()
  });
  
  scheduledTalks$: Observable<Array<Talk>>;
  preparationTalks$: Observable<Array<Talk>>;

  filter: string;

  constructor(private talkDataService: TalkDataService) { }

  ngOnInit() {
    this.scheduledTalks$ = this.talkDataService.getScheduledTalks();
    this.preparationTalks$ = this.talkDataService.getPreparedTalks();

    this.formGroup.valueChanges.debounceTime(500).subscribe((value) => {
      console.log("searching for '" + JSON.stringify(value) + "'...");
    }); 
  }
}
