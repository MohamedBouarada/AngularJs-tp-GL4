import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IItem} from "../liste/item.interface";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  item! : IItem ;


  @Output()
  changeItemIndex = new EventEmitter<IItem>()
  changeIndex() {
this.changeItemIndex.emit(this.item)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
