
import * as fromTalks from "./talks";
import { ActionReducerMap, MetaReducer, ActionReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";

export interface AppState {
    talks: fromTalks.TalksState;
}

export const reducers: ActionReducerMap<AppState> = {
    talks: fromTalks.reducer
}

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function (state: AppState, action: any): AppState {
        console.log("-----------------------------------------------------");
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? [logger]
    : [];

//* *************************************************************** */
// Selectors that span more than one store / reducer

