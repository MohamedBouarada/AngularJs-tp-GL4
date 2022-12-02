import { Component, OnInit } from '@angular/core';
import { IItem } from '../liste/item.interface';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.scss']
})
export class EmbaucheComponent implements OnInit {
  dataList:IItem[]=[];
  constructor(private embaucheService:EmbaucheService) { 
    this.dataList=this.embaucheService.getCv();
  }

  ngOnInit(): void {
  }

}
