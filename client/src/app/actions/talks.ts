import { Action } from "@ngrx/store";
import { Talk } from "../model/talk";


export enum TalkActionTypes {
    GET_ALL_TALKS = "[Talks] Get all actions",
    APPLY_FILTER = "[Talks] Apply the filter",
    VOTE_UP = "[Talks] Vote up",
}

export enum TalkEventTypes {
    TALKS_FETCHED = "[Talks] Talk list fetched",
    TALKS_FETCH_ERROR = "[Talks] Talk list fetch error",
    TALK_VOTE_CHANGED = "[Talks] Talk updated",
    TALK_VOTE_UP_ERROR = "[Talks] Talk voting up errored"
}

export class DoGetAllTalks implements Action {
    readonly type = TalkActionTypes.GET_ALL_TALKS;
}

export class DoApplyFilter implements Action {
    readonly type = TalkActionTypes.APPLY_FILTER;

    constructor(public payload: {filter: string}) { }
}

export class DoVoteUp implements Action {
    readonly type = TalkActionTypes.VOTE_UP;

    constructor(public payload: { talkId: number }) { }
}

export class OnTalksFetched implements Action {
    readonly type = TalkEventTypes.TALKS_FETCHED;

    constructor(public payload: Array<Talk>) { }
}

export class OnTalkVoteChanged implements Action {
    readonly type = TalkEventTypes.TALK_VOTE_CHANGED;

    constructor(public payload: Talk) { }
}

export class OnVoteUpError implements Action {
    readonly type = TalkEventTypes.TALK_VOTE_UP_ERROR;

    constructor(public payload: number) { }
}

export class OnTalkFetchError implements Action{
    readonly type = TalkEventTypes.TALKS_FETCH_ERROR;
}

export type TalkActionsUnion =
    DoApplyFilter
    | DoGetAllTalks
    | DoVoteUp
    | OnTalkVoteChanged
    | OnVoteUpError
    | OnTalksFetched;