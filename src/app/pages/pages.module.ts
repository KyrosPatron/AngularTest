import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { UserspageComponent } from './userspage/userspage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserpostpageComponent } from './userpostpage/userpostpage.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    HomepageComponent,
    UserspageComponent,
    LoginpageComponent,
    UserpostpageComponent,
    NotfoundpageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomepageComponent,
    UserspageComponent,
    LoginpageComponent,
    UserpostpageComponent,
    NotfoundpageComponent

  ]
})
export class PagesModule { }
