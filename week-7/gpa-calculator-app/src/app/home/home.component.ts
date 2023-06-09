/*
    ========================================================================================================================
    ; Title: home.component.ts
    ; Author: Caitlynne Johnson
    ; Bellevue University
    ; Date: 7/9/23
    ; Description: This purpose of this assignment is create new layouts with angular materials and flex layouts
    ========================================================================================================================
*/

import { Component, OnInit } from '@angular/core';

import { ITranscript } from '../transcript.interface';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
  transcriptForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required],
    });
  }
  get form() {
    return this.transcriptForm.controls;
  }

  onSubmit(event) {
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value,
    });

    event.currentTarget.reset();
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