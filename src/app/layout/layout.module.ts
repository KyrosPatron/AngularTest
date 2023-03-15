import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PagesModule } from '../pages/pages.module';



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    PagesModule
  ],
  exports: [
    HeaderComponent,
    MainComponent
  ]
})
export class LayoutModule { }
