import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from '../cv.service';
import { IItem } from '../liste/item.interface';

@Component({
  selector: 'app-add-cv-form',
  templateUrl: './add-cv-form.component.html',
  styleUrls: ['./add-cv-form.component.scss'],
})
export class AddCvFormComponent implements OnInit {
  cv = new IItem(-1, '', '', '', '', '', '');
  form: FormGroup;
  constructor(private cvService: CvService, private router: Router) {
    this.form = new FormGroup({
      cin: new FormControl(this.cv.cin, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^[0-9]*$'),
      ]),
      age: new FormControl(this.cv.age, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      name: new FormControl(this.cv.name, [Validators.required]),
      firstname: new FormControl(this.cv.firstname, [Validators.required]),
      path: new FormControl(this.cv.path, [Validators.required]),
      job: new FormControl(this.cv.job, [Validators.required]),
    });
  }

  ngOnInit(): void {}
  
  submitForm(){
    this.cvService.addCv(this.cv);
    console.log('====================================');
    console.log(this.cv);
    console.log('====================================');
    this.router.navigate(['/cv']);
  }
}
