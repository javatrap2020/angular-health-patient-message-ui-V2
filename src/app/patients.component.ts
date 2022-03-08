import {Component, Input, OnInit} from "@angular/core";
import {AppService} from "./app.service";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})

export class PatientsComponent implements OnInit{

  Patient: any = [];

  constructor(public restApi: AppService) {
  }

  @Input() patients: any[] | undefined;

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
    return this.restApi.getPatients().subscribe((data: {}) => {
      this.Patient = data;
    });
  }

  deletePatientN(email: string | undefined) {
    if (window.confirm('Are you sure, you want to  delete?{email}')) {
      this.restApi.deletePatient(email).subscribe((data) => {
        this.loadPatients();
      });
    }
  }

}
