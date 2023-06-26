/*
    ========================================================================================================================
    ; Title: book-list.component.ts
    ; Author: Caitlynne Johnson
    ; Bellevue University
    ; Date: 6/25/23
    ; Description: This purpose of this assignment is create new navigation and layout based on flex layout and angular materials
    ========================================================================================================================
 */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numbOfPages', 'authors'];
  book: IBook; 

  constructor(private bookService: BooksService) {
    this.books = this.bookService.getBooks();
  }

  ngOnInit(): void {

  }

  showBookDetails(isbn: string) {
    this.book = this.bookService.getBook(isbn);
    console.log(this.book);
  }
}
