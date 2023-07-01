/*
    ========================================================================================================================
    ; Title: book-details-dialog.component.ts
    ; Author: Caitlynne Johnson
    ; Bellevue University
    ; Date: 6/25/23
    ; Description: This purpose of this assignment is create new navigation and layout based on flex layout and angular materials
    ========================================================================================================================
 */

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';


@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {
  book: IBook;

  constructor(private dialogRed: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.book = data.book;
    }

  ngOnInit(): void {
  }

}
