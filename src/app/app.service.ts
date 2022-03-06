import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL, EMAIL, PATIENT_URL, PATIENTS_URL, SLASH} from "./utils/constants";
import { throwError } from 'rxjs';
import {Patient} from "./api/models/Patient";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})

export class AppService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  rootURL = API_URL;

  getPatients() {
    return this.http.get(this.rootURL + PATIENTS_URL);
  }

  addPatient(patient: any, id: number) {
    patient.id = id;
    return this.http.post(this.rootURL + PATIENT_URL, patient);
  }

  updatePatient(patient: any, id: number) {
    patient.id = id;
    return this.http.put(this.rootURL + PATIENT_URL, patient);
  }

  deletePatient(email: string | undefined) {
    return this.http.delete<Patient>(this.rootURL + PATIENT_URL + EMAIL + SLASH + email, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
