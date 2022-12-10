import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../cv.service';
import { IItem } from '../liste/item.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  cv : IItem = this.cvService.getCv()[0];
  cvId : string = "1";
  constructor(private route: ActivatedRoute, private cvService: CvService,private router: Router) {
    route.params.subscribe(params =>{
      this.cvId = params['id'];
      this.cv = this.cvService.getCvById(parseInt(this.cvId));
    })
  }
  deleteCv(){
    this.cvService.removeCv(parseInt(this.cvId))
    this.router.navigate(['/cv']);
  }
  ngOnInit(): void {}
}
