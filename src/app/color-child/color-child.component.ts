import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-child',
  templateUrl: './color-child.component.html',
  styleUrls: ['./color-child.component.scss']
})
export class ColorChildComponent implements OnInit {
  @Input() parentColor:string =""
  @Output() newItemEvent = new EventEmitter<string>()
  myFavoriteColor:string="blue";

  constructor() { }

  ngOnInit(): void {
  }
  changeFavoriteColor(newValue:string) {
    this.newItemEvent.emit(newValue)
  }
}
