import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/authservice.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(private loginsService: AuthserviceService) { };

  loginUp(U: User) {
    this.loginsService.setUserLogin(U);
    //console.log('DONE');
  }

  getStatusLog() {
    return this.loginsService.isLogged();
  }



}
