import {RouterStateUrl} from "../shared/utils";
import * as fromCreatePatient from './createpatient';
// @ts-ignore
import * as fromRouter from '@ngrx/router-store';
// @ts-ignore
import {ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer,} from '@ngrx/store';

// @ts-ignore
import{localStorageSync} from 'ngrx-store-localstorage';
import {environment} from "../../../environments/environment";
// @ts-ignore
import {storeFreeze} from 'ngrx-store-freeze';


export interface State {
  createPatient: fromCreatePatient.State;
  routerReducer: fromRouter.RouterReducer<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  createPatient: fromCreatePatient.reducer,
  routerReducer: fromRouter.routerReducer,
};

const reducerKeys = ['loggedinpatient'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] =
  environment.production ? [localStorageSyncReducer]
    : [logger, storeFreeze, localStorageSyncReducer];

export const getCreatePatientState = createFeatureSelector<fromCreatePatient.State>('createPatient');

export const getPatients = createSelector(
  getCreatePatientState,
  fromCreatePatient.getPatients
);
