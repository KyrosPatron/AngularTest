import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PagesModule } from '../pages/pages.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MainComponent
  ]
})
export class LayoutModule { }
