import { Injectable } from "@angular/core";
import { TalkDataService } from "../services/talk-data.service";
import { Observable, of, defer } from "rxjs";
import { Action } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { TalkActionTypes, OnTalksFetched, OnTalkFetchError, DoGetAllTalks } from "../actions/talks";
import { switchMap, map, catchError } from "rxjs/operators";

@Injectable()
export class TalkEffects {
    
    @Effect()
    getAllTalks$: Observable<Action> = this.actions$.pipe(
        ofType(TalkActionTypes.GET_ALL_TALKS),
        switchMap(action => this.service.getAllTalks().pipe(map(data => new OnTalksFetched(data)), catchError(() => of(new OnTalkFetchError()))))
    )
    @Effect()
    init$: Observable<Action> = defer(() => {
        return of(new DoGetAllTalks());
    });

    constructor(private service: TalkDataService, private actions$: Actions) { }
}