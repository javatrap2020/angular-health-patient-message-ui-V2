import {Component, OnDestroy} from '@angular/core';
import {AppService} from "./app.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  constructor(private appService: AppService) {
  }

  title = 'angular-health-patient-message-ui-2';

  patientForm = new FormGroup({
    name: new FormControl('', Validators.nullValidator || Validators.required),
    // lastName: new FormControl('', Validators.nullValidator || Validators.required),
    email: new FormControl('', Validators.nullValidator || Validators.required),
    // message: new FormControl('', Validators.nullValidator || Validators.required),
  });

  patients: any[] = [];
  patientCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    this.appService.addPatient(this.patientForm.value, this.patientCount + 1).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.patientCount = this.patientCount + 1;
      console.log(this.patientCount);
      this.patientForm.reset();
    });
  }

  getAllPatients() {
    // @ts-ignore
    this.appService.getPatients().pipe(takeUntil(this.destroy$)).subscribe((patients: any[]) => {
      this.patientCount = patients.length;
      this.patients = patients;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.getAllPatients();
  }

}
