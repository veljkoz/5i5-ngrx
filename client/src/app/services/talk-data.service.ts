import { Injectable } from '@angular/core';
import { Talk } from '../model/talk';

@Injectable({
  providedIn: 'root'
})
export class TalkDataService {

  constructor() { }

  private mock(title, scheduled, dateDue, description, votesUp): Talk{
    return {
      title: title,
      scheduled: scheduled,
      dateTimeDue: dateDue,
      description: description,
      votesUp: votesUp
    };
  }

  public getScheduledTalks(): Array<Talk> {
    return [
      this.mock("First scheduled", true, new Date("2018/03/11 16:30:00"), "description of first", 1), 
      this.mock("Second scheduled", true, new Date("2018/05/17 16:30:00"), "description of second", 4)
    ]
  }

  public getPreparedTalks(): Array<Talk> {
    return [
      this.mock("First prepared", new Date("2018/04/12 16:30:00"), true, "description of first", 1), 
      this.mock("Second prepared", new Date("2018/02/23 16:30:00"),true, "description of second", 2),
      this.mock("Third prepared", new Date("2018/05/11 16:30:00"),true, "description of third", 4), 
      this.mock("Fourth prepared", new Date("2018/06/03 16:30:00"),true, "description of fourth", 5)
    ]
  }
}
