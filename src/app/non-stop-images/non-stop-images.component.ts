import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-non-stop-images',
  templateUrl: './non-stop-images.component.html',
  styleUrls: ['./non-stop-images.component.scss'],
})
export class NonStopImagesComponent implements OnInit {
  imageList: string[] = [
    '/assets/images/med.jpg',
    '/assets/images/racem.jpg',
    '/assets/images/mahdi.jpg',
  ];
  observable = new Observable((observer) => {
    let i = 2;
    observer.next(this.imageList[0]);
    setInterval(() => {
      if (i < 0) {
        i = 2;
      }

      observer.next(this.imageList[i--]);
    }, 1000);
  });

  constructor() {}

  ngOnInit(): void {}
}
