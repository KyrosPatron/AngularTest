import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  userLogin!: User;
  isLog: boolean = false;


  setUserLogin(u: User) {
    this.userLogin = u;
    this.isLog = true;
  }


  isLogged() {
    return this.isLog;
  }

}
