import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})

export class PatientsComponent implements OnInit{
  constructor() {
  }
  @Input() patients: any[] | undefined;
  ngOnInit(): void {
  }

}
