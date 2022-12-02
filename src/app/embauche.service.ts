import { Injectable } from '@angular/core';
import { IItem } from './liste/item.interface';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  listeEmbauche: IItem[] = [];
  constructor() {}

  addCv(item: IItem) {
    if (!this.listeEmbauche.includes(item)) {
      this.listeEmbauche.push(item);
      return true;
    }
    return false
  }

  getCv() {
    return this.listeEmbauche;
  }
}
