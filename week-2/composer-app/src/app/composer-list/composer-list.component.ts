import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() { 
    this.composers = [
      new Composer('John Williams', 'Film Composer'),
      new Composer('Nobuo Uematsu', 'Video Game Composer'),
      new Composer('Ludwig Beethoven', 'Classical Composer'),
      new Composer('Claude Debussy', 'Classical Composer'),
      new Composer('Martin O Donnell', 'Video Game Composer')
    ];
  }

  ngOnInit(): void {
  }

}
