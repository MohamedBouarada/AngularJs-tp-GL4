import { Component, OnInit } from '@angular/core';
import {cvList} from "./data";
import {IItem} from "../liste/item.interface";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  list=cvList ;
  singleCv!:IItem ;
  constructor() { }

  ngOnInit(): void {
  }

  changeCvItem(newVal:IItem) {

    this.singleCv = newVal
  }

}
