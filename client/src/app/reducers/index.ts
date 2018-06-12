
import * as fromTalks from "./talks";
import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { TalksState } from "./talks";

export interface AppState {
    talks: fromTalks.TalksState;
}

export const reducers: ActionReducerMap<AppState> = {
    talks: fromTalks.reducer
}


//**************************************************************** */
// SELECTORS 

