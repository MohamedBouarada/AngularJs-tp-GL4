import { Injectable } from '@angular/core';
import { cvList } from './cv/data';
import { EmbaucheService } from './embauche.service';
import { IItem } from './liste/item.interface';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  
  cvList:IItem[]=cvList;
  constructor(private embaucheService: EmbaucheService) {}
  getCv(){
    return this.cvList;
  }
  getCvById(id : Number): any{
    return this.cvList.find(cv => cv.id === id);
  }
  removeCv(id: Number) {
    this.embaucheService.removeCvsEmbauche(id);
    const idx = this.cvList.findIndex((cv) => cv.id === id);
    if (idx !== -1) {
      this.cvList.splice(idx, 1);
    }
  }
}
