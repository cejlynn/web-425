import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() { 
    this.books = [
      {
        isbn: '9780450411434',
        title: 'IT',
        description: "They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But none of them can withstand the force that has drawn them back to Derry to face the nightmare without an end, and the evil without a name.",
        numbOfPages: 1168,
        authors: ['Stephen King']
      },
      {
        isbn: '9780450040184',
        title: 'The Shining',
        description: "Jack Torrance's new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he'll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote...and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.",
        numbOfPages: 659,
        authors: ['Stephen King']
      },
      {
        isbn: '9780450031069',
        title: 'Salems Lot',
        description: "Thousands of miles away from the small township of 'Salem's Lot, two terrified people, a man and a boy, still share the secrets of those clapboard houses and tree-lined streets. They must return to 'Salem's Lot for a final confrontation with the unspeakable evil that lives on in the town.",
        numbOfPages: 483,
        authors: ['Stephen King']
      },
      {
        isbn: '9780451933027',
        title: 'The Green Mile',
        description: "At Cold Mountain Penitentiary, along the lonely stretch of cells known as the Green Mile, condemned killers such as 'Billy the Kid' Wharton and the possessed Eduard Delacroix await death strapped in 'Old Sparky'. But good or evil, innocent or guilty, prisoner or guard, none has ever seen the brutal likes of the new prisoner, John Coffey, sentenced to death for raping and murdering two young girls. Is Coffey a devil in human form? Or is he a far, far different kind of being?",
        numbOfPages: 592,
        authors: ['Stephen King']
      },
      {
        isbn: '9781416524304 ',
        title: 'Carrie',
        description: "The story of misunderstood high school girl Carrie White, her extraordinary telekinetic powers, and her violent rampage of revenge, remains one of the most barrier-breaking and shocking novels of all time.",
        numbOfPages: 272,
        authors: ['Stephen King']
      },



    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
