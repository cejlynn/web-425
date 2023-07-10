/*
    ========================================================================================================================
    ; Title: sign-in.service.ts
    ; Author: Caitlynne Johnson
    ; Bellevue University
    ; Date: 7/9/23
    ; Description: This purpose of this assignment is create new layouts with angular materials and flex layouts
    ========================================================================================================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }
  validate(studentId: number) {
    return this.studentIds.some((id) => id === studentId);
  }
}
