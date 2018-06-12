import { Action } from "@ngrx/store";
import { Talk } from "../model/talk";


export enum TalkActionTypes {
    GET_ALL_TALKS = "[Talks] Get all actions",
    APPLY_FILTER = "[Talks] Apply the filter",
}

export enum TalkEventTypes {
    TALKS_FETCHED = "[Talks] Talk list fetched",
    TALKS_FETCH_ERROR = "[Talks] Talk list fetch error"
}

export class DoGetAllTalks implements Action {
    readonly type = TalkActionTypes.GET_ALL_TALKS;
}

export class DoApplyFilter implements Action {
    readonly type = TalkActionTypes.APPLY_FILTER;

    constructor(public payload: { filter: string }) { }
}

export class OnTalksFetched implements Action {
    readonly type = TalkEventTypes.TALKS_FETCHED;

    constructor(public payload: Array<Talk>) { }
}

export class OnTalkFetchError implements Action{
    readonly type = TalkEventTypes.TALKS_FETCH_ERROR;

}


export type TalkActionsUnion =
    DoApplyFilter
    | DoGetAllTalks
    | OnTalksFetched;