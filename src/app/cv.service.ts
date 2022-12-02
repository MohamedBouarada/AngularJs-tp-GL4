import { Injectable } from '@angular/core';
import { cvList } from './cv/data';
import { IItem } from './liste/item.interface';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  
  cvList:IItem[]=cvList;

  getCv(){
    return this.cvList;
  }

  constructor() { }
}
