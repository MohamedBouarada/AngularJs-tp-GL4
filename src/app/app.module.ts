import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { CvItemDirective } from './cv-item.directive';
import { CvDetailDirective } from './cv-detail.directive';
import { DefaultImagePipe } from './default-image.pipe';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ToastrModule } from 'ngx-toastr';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { UserDetailsComponent } from './user-details/user-details.component';

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
    RainbowDirective,
    CvItemDirective,
    CvDetailDirective,
    DefaultImagePipe,
    EmbaucheComponent,
    NavBarComponent,
    RouterSimulatorComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
