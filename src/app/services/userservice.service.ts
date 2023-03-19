import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  users: User[] = [];


  fillExample() {
    let us: User;
    us = { name: "Tizio", surname: "Romani", age: 20 };
    this.users.push(us);
    us = { name: "Romolo", surname: "Faggiano", age: 15 };
    this.users.push(us);
    us = { name: "Marco", surname: "Lamella", age: 32 };
    this.users.push(us);
  }


  addUser(u: User) {
    this.users.push(u);
  }

  removeUser(u: User) {
    this.users = this.users.filter((item, i) => i != this.users.indexOf(item));

  }

  getUserI(i: number) {
    return this.users[i];
  }

  getUserArray() {
    return this.users;
  }




}
