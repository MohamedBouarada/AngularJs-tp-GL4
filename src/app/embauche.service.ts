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
  removeCvsEmbauche(id:Number){
    const idx = this.listeEmbauche.findIndex((cv) => cv.id === id);
    if (idx !== -1) {
      this.listeEmbauche.splice(idx, 1);
    }
  }
}
