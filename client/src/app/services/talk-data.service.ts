import { Injectable } from '@angular/core';
import { Talk } from '../model/talk';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalkDataService {

  private allTalks: Array<Talk> = [
    this.mock(1, "First scheduled", true, new Date("2018/03/11 16:30:00"), "description of first", 3),
    this.mock(2, "Second scheduled", true, new Date("2018/05/17 16:30:00"), "description of second", 4),
    this.mock(3, "First prepared", false, new Date("2018/04/12 16:30:00"), "description of first", 1),
    this.mock(4, "Second prepared", false, new Date("2018/02/23 16:30:00"), "description of second", 2),
    this.mock(5, "Third prepared", false, new Date("2018/05/11 16:30:00"), "description of third", 4),
    this.mock(6, "Fourth prepared", false, new Date("2018/06/03 16:30:00"), "description of fourth", 5)
  ];

  constructor() { }

  private mock(id, title, scheduled, dateDue, description, votesUp): Talk {
    return {
      id: id,
      title: title,
      scheduled: scheduled,
      dateTimeDue: dateDue,
      description: description,
      votesUp: votesUp
    };
  }

  public getTalkDetails(id: number): Observable<Talk> {
    return of(this.allTalks.find(elem => elem.id === id));
  }

  public getScheduledTalks(): Observable<Array<Talk>> {
    return of(this.allTalks.filter(elem => elem.scheduled));
  }

  public getPreparedTalks(): Observable<Array<Talk>> {
    return of(this.allTalks.filter(elem => !elem.scheduled));
  }

  public voteUp(talk: Talk): Observable<Talk> {
    talk.votesUp++;
    return of(talk);
  }
}
