/*
    ========================================================================================================================
    ; Title: sign-in.component.ts
    ; Author: Caitlynne Johnson
    ; Bellevue University
    ; Date: 7/9/23
    ; Description: This purpose of this assignment is create new layouts with angular materials and flex layouts
    ========================================================================================================================
*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string;
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private signinService: SignInService
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]*$'),
        ]),
      ],
    });
  }

  get form() {
    return this.signinForm.controls;
  }

  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage =
        'This Student ID you entered is invalid, please try again.';
    }
  }
}