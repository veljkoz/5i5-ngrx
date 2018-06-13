import { Talk } from "../model/talk";
import { TalkActionsUnion, TalkActionTypes, TalkEventTypes } from '../actions/talks';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { filter } from "rxjs/operators";


export interface TalksState extends EntityState<Talk> {
    activeFilter: string;
};

const adapter: EntityAdapter<Talk> = createEntityAdapter<Talk>({
    selectId: (talk: Talk) => talk.id,
    sortComparer: false
});

const initState: TalksState = adapter.getInitialState({
    activeFilter: ""
});


export function reducer(state: TalksState = initState, action: TalkActionsUnion): TalksState {
    console.log(state);
    switch (action.type) {
        //ACTIONS (the ones that don't invoke any service or anything... note that this could've easily be renamed as event (e.g. FilterModified))
        case TalkActionTypes.APPLY_FILTER: {
            const newFilter = action.payload.filter.toLowerCase();
            return {
                ...state,
                activeFilter: newFilter
            }
        }
        //EVENTS that come with data (i.e. "document type of actions")
        case TalkEventTypes.TALKS_FETCHED: {
            return adapter.addAll(action.payload, state);
        }

        case TalkEventTypes.TALK_VOTE_CHANGED: {
            let upd: Update<Talk> = { id: action.payload.id, changes: action.payload };
            return adapter.updateOne(upd, state);
        }

        default: {
            return state;
        }
    }
}


//**************************************************************** */
// Functions to slice the state 

const selectTalksState = createFeatureSelector<TalksState>('talks');
export const selectAllTalks = adapter.getSelectors(selectTalksState).selectAll;
export const selectAllScheduled = createSelector(selectAllTalks, (allTalks) => allTalks.filter(elem => elem.scheduled));
export const selectAllPrepared = createSelector(selectAllTalks, (allTalks) => allTalks.filter(elem => !elem.scheduled));
export const selectFilter = createSelector(selectTalksState, (state) => state.activeFilter);
export const selectScheduled = createSelector(selectAllScheduled, selectFilter,
    (schedTalks, currFilter) => {
        console.log("Received schedTalks & filter ", schedTalks, currFilter);
        let newData = schedTalks.filter((elem) => !currFilter || elem.title.toLowerCase().indexOf(currFilter.toLowerCase()) !== -1);
        let result = schedTalks.filter(elem => elem.title.toLowerCase().indexOf(currFilter) !== -1);
        return newData;
    }
);
export const selectPrepared = createSelector(selectAllPrepared, selectFilter,
    (prepTalks, currFilter) => prepTalks.filter(elem => elem.title.toLowerCase().indexOf(currFilter) !== -1
    ));