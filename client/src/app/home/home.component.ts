import { Component, OnInit } from '@angular/core';
import { Talk } from '../model/talk';
import { TalkDataService } from '../services/talk-data.service';
import { BehaviorSubject } from 'rxjs';
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

  scheduledTalks: Array<Talk>;
  preparationTalks: Array<Talk>;
  schedTalks$: BehaviorSubject<Array<Talk>>;
  prepTalks$: BehaviorSubject<Array<Talk>>;

  filter: string;

  constructor(private talkDataService: TalkDataService) { }

  ngOnInit() {
    this.filter = '';
    this.schedTalks$ = new BehaviorSubject([]);
    this.prepTalks$ = new BehaviorSubject([]);

    this.talkDataService.getScheduledTalks().subscribe(data => {
      this.scheduledTalks = data;
      this.schedTalks$.next(this.filterIt(data));
    });

    this.talkDataService.getPreparedTalks().subscribe(data => {
      this.preparationTalks = data;
      this.prepTalks$.next(this.filterIt(data));
    });

    this.formGroup.valueChanges.debounceTime(500).subscribe((value) => {
      console.log("searching for '" + JSON.stringify(value) + "'...");
      this.filter = value.filter;
      this.schedTalks$.next(this.filterIt(this.scheduledTalks));
      this.prepTalks$.next(this.filterIt(this.preparationTalks));
    });
  }
  
  private filterIt(data: Array<Talk>) {
    let activeFilter = this.filter;
    if (data) {
      let newData = data.filter((elem) => !activeFilter || elem.title.toLowerCase().indexOf(activeFilter.toLowerCase()) !== -1);
      return newData;
    }
    else {
      return [];
    }
  }
}
