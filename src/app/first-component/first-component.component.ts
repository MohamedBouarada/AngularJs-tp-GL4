import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  color:string="white"
  constructor() { }
  getColor(){
    return this.color;
  }
  setColor(color:string){
    this.color=color;
  }
  ngOnInit(): void {
  }

}
