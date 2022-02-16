import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PATIENT_URL, PATIENTS_URL, SLASH} from "./utils/constants";

@Component({
  selector: 'app-display-board',
  templateUrl: './display-board.component.html',
  styleUrls: ['./display-board.component.css']
})

export class DisplayBoardComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute ) {
  }

  @Input() patientCount = 0;
  @Output() getPatientsEvent = new EventEmitter()

  ngOnInit(): void {
  }

  getAllPatients() {
    this.getPatientsEvent.emit('get all users');
  }

  reloadCurrentPage() {
    if (this.router && this.router.url === SLASH) {
      PATIENTS_URL
      window.location.reload();
    } else {
      this.router.navigate([PATIENTS_URL]);
    }
  }
}
