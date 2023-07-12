/*
    ========================================================================================================================
    ; Title: app.component.ts
    ; Author: Caitlynne Johnson
    ; Bellevue University
    ; Date: 6/25/23
    ; Description: This purpose of this assignment is create new navigation and layout based on flex layout and angular materials
    ========================================================================================================================
 */

import { Component } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}
