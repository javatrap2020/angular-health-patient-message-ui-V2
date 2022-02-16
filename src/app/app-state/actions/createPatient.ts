// @ts-ignore
import {createAction, props} from "@ngrx/store";
import {Patient} from "../models";

export const CREATE_PATIENT = '[CREATE PATIENT] Create Patient API';
export const CREATE_PATIENT_SUCCESS = '[CREATE PATIENT] Create Patient API Success';
export const CREATE_PATIENT_FAILURE = '[CREATE PATIENT] Create Patient API Success';

export const createPatient = createAction(
  CREATE_PATIENT,
  props<Patient>()
);

export const createPatientSuccess = createAction(
  CREATE_PATIENT,
  props<Patient>()
);

export const createPatientFailure = createAction(
  CREATE_PATIENT,
  props<Patient>()
);
