import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  users: User[] = [];
  error: string | null = null;
  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) { }

  getApiUsers(): Observable<UserApi> {
    return this.http.get<UserApi>(this.apiUrl);
  }

  serviceOnInit() {
    this.getApiUsers().subscribe({
      next: (data: UserApi) => {
        this.users = data.users;
        this.fillExample();
        //console.log('Service done');
      },
      error: (error: HttpErrorResponse) => {
        let errorMessage = 'An error occurred';
        if (error.error instanceof ErrorEvent) {
          // Client-side errors
          errorMessage = `Client Error: ${error.error.message}`;
        } else {
          // Server-side errors
          errorMessage = `Server Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        alert("C'è stato un errore con il server, riprova più tardi.");
        console.error(errorMessage, { error });
      },
    });
  }

  fillExample() {
    let us: User;
    us = { firstName: "Tizio", lastName: "Romani", age: 20 };
    this.users.push(us);
    us = { firstName: "Romolo", lastName: "Faggiano", age: 15 };
    this.users.push(us);
    us = { firstName: "Marco", lastName: "Lamella", age: 32 };
    this.users.push(us);
  }

  setUsers(u: User[]) {
    this.users = u;
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
