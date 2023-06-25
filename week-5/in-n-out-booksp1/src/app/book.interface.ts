/*
    ========================================================================================================================
    ; Title: book.interface.ts
    ; Author: Caitlynne Johnson
    ; Bellevue University
    ; Date: 6/25/23
    ; Description: This purpose of this assignment is create new navigation and layout based on flex layout and angular materials
    ========================================================================================================================
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numbOfPages: number;
  authors: Array<string>;
}
