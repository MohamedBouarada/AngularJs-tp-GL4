import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { ColorChildComponent } from './color-child/color-child.component';
import { CvComponent } from './cv/cv.component';
import { MiniWordComponent } from './mini-word/mini-word.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponentComponent },
  { path: 'carte-visite', component: CarteVisiteComponent },
  { path: 'cv', component: CvComponent },
  { path: 'mini-word', component: MiniWordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
