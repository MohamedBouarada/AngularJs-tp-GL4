import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColorChildComponent } from './color-child/color-child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';
import { ItemComponent } from './item/item.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowDirective } from './rainbow.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    CarteVisiteComponent,
    ColorChildComponent,
    CvComponent,
    ListeComponent,
    DetailComponent,
    ItemComponent,
    MiniWordComponent,
    RainbowDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
