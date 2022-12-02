import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IItem } from './item.interface';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  
  dataList! :IItem[] ;


  @Output()
  newChangeItemEvent = new EventEmitter<IItem>()

  constructor(private cvService:CvService) {
    this.dataList=this.cvService.getCv();
   }

  ngOnInit(): void {
    
  }

  changeCurrentIndex (newVal:IItem) {
    this.newChangeItemEvent.emit(newVal)
  }

}
