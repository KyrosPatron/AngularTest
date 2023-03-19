import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutModule } from './layout/layout.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';
import { UserpostpageComponent } from './pages/userpostpage/userpostpage.component';
import { UserspageComponent } from './pages/userspage/userspage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'userpage', component: UserspageComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'postpage', component: UserpostpageComponent },
  { path: '**', component: NotfoundpageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
