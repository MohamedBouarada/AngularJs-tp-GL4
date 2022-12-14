import { Component, Input, OnInit} from '@angular/core';
import {IItem} from "../liste/item.interface";
import { EmbaucheService } from '../embauche.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() 
  singleItem!:IItem

  bool:boolean=false;
  constructor(private embaucheService:EmbaucheService,private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
  }

  embaucher(){
    
    this.bool=this.embaucheService.addCv(this.singleItem);
    if(this.bool){this.toastr.success('Embauché', 'congrats');}
    else{
      this.toastr.warning(`c'est déja embauché`,'oops!')
    }
  }

  navigateToCv(id : number) {
    this.router.navigate(['/cv',id.toString()]);
}

}
