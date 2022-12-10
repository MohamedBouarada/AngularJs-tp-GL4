import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { ColorChildComponent } from './color-child/color-child.component';
import { CvComponent } from './cv/cv.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AddCvFormComponent } from './add-cv-form/add-cv-form.component';
import { NonStopImagesComponent } from './non-stop-images/non-stop-images.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponentComponent },
  { path: 'carte-visite', component: CarteVisiteComponent },
  { path: 'cv', component: CvComponent },
  { path: 'mini-word', component: MiniWordComponent },
  { path: 'cv/:id', component: UserDetailsComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'addCv', component: AddCvFormComponent },
  { path: 'non-stop-images', component: NonStopImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
