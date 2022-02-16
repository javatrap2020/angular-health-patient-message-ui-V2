import * as createPatientActions from '../actions/createPatient'

// @ts-ignore
import {Action, createReducer, on} from "@ngrx/store";


export interface State {
  isLoading: boolean;
  isLoadingSuccess: boolean;
  patients: any;
}

const initialState: State = {
  isLoading: false,
  isLoadingSuccess: false,
  patients: []
};

export const createPatientReducer = createReducer(
  initialState,
  on(createPatientActions.createPatient, (state: any) => ({...state, isLoadingSuccess: false, login: undefined})),
  on(createPatientActions.createPatientSuccess,(state: any, patient: any) => ({...state, isLoading: false, isLoadingSuccess: true, patient})),
  on(createPatientActions.CREATE_PATIENT_FAILURE, (state: any, patient: any) => ({...state, isLoading: false, isLoadingSuccess: true, patient}))
);

export function reducer(state: State | undefined, action: Action) {
  return createPatientReducer(state, action);
}

export const getPatients = (state: State) => {
  return {
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess,
    login: state.patients
  };
};
