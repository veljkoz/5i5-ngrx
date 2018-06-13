
import * as fromTalks from "./talks";
import { ActionReducerMap, MetaReducer, ActionReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { localStorageSync } from 'ngrx-store-localstorage';

export interface AppState {
    talks: fromTalks.TalksState;
}

export const reducers: ActionReducerMap<AppState> = {
    talks: fromTalks.reducer
}



/* ************************************** */
// META REDUCERS: 

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function (state: AppState, action: any): AppState {
        console.log("-----------------------------------------------------");
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    //add any keys you need to persist in the 'keys' collection
    //(here, the 'keys' we're referring to are the keys of the "reducers" object we have above)
    return localStorageSync({
        keys: ['talks'],
        rehydrate: true //restore state from the local storage (e.g. on user refreshing screen we want to keep the session alive)
    })(reducer);
  }


export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? [logger]
    : [];

