import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  posts!: Post[];


  fillExample() {
    let us: User;
    let usCo: User;
    let po: Post;
    let co: Commento;
    let co1: Commento;

    usCo = { name: "Marco", surname: "Lamella", age: 32 };
    us = { name: "Tizio", surname: "Romani", age: 22 };
    co = { author: usCo, message: "Si bella bro!" };
    co1 = { author: usCo, message: "Anche se poteva andare meglio" };
    po = { title: "Partita ", author: us, message: "Bella partita ragazzi", comments: [co, co1] };
    this.posts.push(po);

    us = { name: "Romolo", surname: "Faggiano", age: 15 };
    co = { author: usCo, message: "Si bella bro!" };
    po = { title: "Partita ", author: us, message: "Bella partita ragazzi", comments: [co] };
    this.posts.push(po);

  }


  addPost(p: Post) {
    this.posts.push(p);
  }

  removePost(p: Post) {
    this.posts = this.posts.filter((item, i) => i != this.posts.indexOf(p));

  }

  getPostI(i: number) {
    return this.posts[i];
  }

  viewPostArray() {
    return this.posts;
  }

}
