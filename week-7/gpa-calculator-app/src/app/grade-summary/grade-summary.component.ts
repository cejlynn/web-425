/*
    ========================================================================================================================
    ; Title: grade-summary-component.ts
    ; Author: Caitlynne Johnson
    ; Bellevue University
    ; Date: 7/9/23
    ; Description: This purpose of this assignment is create new layouts with angular materials and flex layouts
    ========================================================================================================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss'],
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade: string;
  @Input() course: string;
  constructor() {}

  ngOnInit(): void {}
}
