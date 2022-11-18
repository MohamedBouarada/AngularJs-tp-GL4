import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IItem } from './item.interface';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  @Input()
  dataList! :IItem[] ;


  @Output()
  newChangeItemEvent = new EventEmitter<IItem>()

  constructor() { }

  ngOnInit(): void {
  }

  changeCurrentIndex (newVal:IItem) {
    this.newChangeItemEvent.emit(newVal)
  }

}
