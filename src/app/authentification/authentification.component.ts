import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  user = {email :'' , pass:''} ;
  form : FormGroup ;
  isSubmitted:boolean=false;
  constructor() { 
    this.form = new FormGroup({
      pass: new FormControl(this.user.pass, [
        Validators.required,
        Validators.minLength(4),
      ]),
      mail: new FormControl(this.user.email, [Validators.required , Validators.email])
    });
  }

  ngOnInit(): void {
  }
  submitForm(){
    console.log(this.user);
    this.isSubmitted=true;
  }
}
