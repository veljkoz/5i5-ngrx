import { Talk } from "../model/talk";
import { TalkActionsUnion, TalkActionTypes, TalkEventTypes } from '../actions/talks';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from "@ngrx/store";


export interface TalksState extends EntityState<Talk> {
    activeFilter: string;
};

const adapter: EntityAdapter<Talk> = createEntityAdapter<Talk>();

const initState: TalksState = adapter.getInitialState({
    activeFilter: ""
});

export function reducer(state: TalksState = initState, action: TalkActionsUnion): TalksState {
    switch (action.type) {
        case TalkActionTypes.APPLY_FILTER: {
            return {
                ...state,
                activeFilter: action.payload.filter
            }
        }
        case TalkEventTypes.TALKS_FETCHED: {
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
}


//**************************************************************** */
// Functions to slice the state 

export const {
    // select the array of talks
    selectAll: extractAllTalks
} = adapter.getSelectors();

//an actual data instance pulled from the store
const selectTalkState = createFeatureSelector<TalksState>('talks');

export const selectAllTalks = createSelector(selectTalkState, extractAllTalks);
export const selectScheduled = createSelector(selectTalkState, (state) => selectAllTalks(state).filter(elem => elem.scheduled));
export const selectPrepared = createSelector(selectTalkState, (state) => selectAllTalks(state).filter(elem => !elem.scheduled));