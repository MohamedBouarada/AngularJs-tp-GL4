import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.scss']
})
export class CarteVisiteComponent implements OnInit {
  firstName:string = "Mohamed"
  lastName:string = "Bouarada"
  image:string = "mohamed.jpg"
  job:string = "Software engineer"
  quote:string = `"Lamborghini Mercy Your chick she so thirsty I'm in that two seat Lambo"`
  jobDescription:string="etudiant en 2ème année cycle d'ingénieur en génie logiciel à l insat"
  Keywords:string="HTML , CSS , Angularjs ,JS ,PHP"

  profile :Profile=new Profile();
  rotate:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  setRotate(){
    this.rotate=!this.rotate;
  }

}
