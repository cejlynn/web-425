import { Component, OnInit } from '@angular/core';
import { ITranscript } from "../transcript.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = [
    'A',
    'A-',
    'B+',
    'B',
    'B-',
    'C+',
    'C',
    'C-',
    'D+',
    'D',
    'D-',
    'F',
  ];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;
  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {}

  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }
  // this will give you a grade for your class
  calculateResults() {
    let gpa: number = 0;
    for (let entry of this.transcriptEntries) {
      switch (entry.grade) {
        case 'A':
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.0;
          break;
        case 'B-':
          gpa += 2.7;
          break;
        case 'C+':
          gpa += 2.3;
          break;
        case 'C':
          gpa += 1.7;
          break;
        case 'C-':
          gpa += 1.3;
          break;
        case 'D+':
          gpa += 1;
          break;
        case 'D':
          gpa += 0.7;
          break;
        case 'D-':
          gpa += 0;
          break;
        case 'F':
          gpa += 0;
          break;
      }
    }
    // this gives you the gpa of all classes
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  // this will clear the form
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}