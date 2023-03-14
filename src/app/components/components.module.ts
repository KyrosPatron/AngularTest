import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostlistcomponentComponent } from './postlistcomponent/postlistcomponent.component';
import { PostitemcomponentComponent } from './postitemcomponent/postitemcomponent.component';
import { UserlistcomponentComponent } from './userlistcomponent/userlistcomponent.component';
import { UseritemcomponentComponent } from './useritemcomponent/useritemcomponent.component';
import { LoginformcomponentComponent } from './loginformcomponent/loginformcomponent.component';
import { UserpostcomponentComponent } from './userpostcomponent/userpostcomponent.component';
import { UserpostformcomponentComponent } from './userpostformcomponent/userpostformcomponent.component';



@NgModule({
  declarations: [
    PostlistcomponentComponent,
    PostitemcomponentComponent,
    UserlistcomponentComponent,
    UseritemcomponentComponent,
    LoginformcomponentComponent,
    UserpostcomponentComponent,
    UserpostformcomponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
