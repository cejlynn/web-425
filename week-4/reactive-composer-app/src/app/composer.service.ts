import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;
    
    constructor() {
        this.composers = [
            {
                composerId: 100, fullName: "John Williams", genre: "Film Composer"
            },
            {
                composerId: 101, fullName: "Nobuo Uematsu", genre: "Video Game Composer"
            },
            {
                composerId: 102, fullName: "Ludwig Beethoven", genre: "Classical Composer"
            },
            {
                composerId: 103, fullName: "Claude Debussy", genre: "Classical Composer"
            },
            {
                composerId: 104, fullName: "Martin O Donnell", genre: "Video Game Composer"
            },
        ]
  }

  getComposers() {
    return this.composers;
  }


  getComposer(composerId: number) {
    for (let composer of this.composers) {
        if (composer.composerId === composerId) {
            return composer;
        }
    }
  }
}


