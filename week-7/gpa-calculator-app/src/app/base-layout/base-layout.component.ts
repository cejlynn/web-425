/*
    ========================================================================================================================
    ; Title: base-layout-component.ts
    ; Author: Caitlynne Johnson
    ; Bellevue University
    ; Date: 7/9/23
    ; Description: This purpose of this assignment is create new layouts with angular materials and flex layouts
    ========================================================================================================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;
  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'GPA Calculator App';
  }

  ngOnInit(): void {}

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}
