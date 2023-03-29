import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  posts: Post[] = [];


  fillExample() {
    let us: User;
    let usCo: User;
    let po: Post;
    let co: Commento;
    let co1: Commento;

    usCo = { firstName: "Marco", lastName: "Lamella", age: 32 };
    us = { firstName: "Tizio", lastName: "Romani", age: 22 };
    co = { author: usCo, message: "Si bella bro!" };
    co1 = { author: usCo, message: "Anche se poteva andare meglio" };
    po = { title: "Partita ", author: us, message: "Bella partita ragazzi", comments: [co, co1] };
    this.posts.push(po);

    us = { firstName: "Romolo", lastName: "Faggiano", age: 15 };
    co = { author: usCo, message: "Non vedo l'ora di iniziare!" };
    po = { title: "Caccia al tesoro ", author: us, message: "La caccia al tesoro si terrà domani", comments: [co] };
    this.posts.push(po);

  }


  addPost(p: Post) {
    this.posts.push(p);
  }

  removePost(p: Post) {
    this.posts = this.posts.filter((item, i) => i != this.posts.indexOf(p));

  }

  addComment(i: number, c: Commento) {
    this.posts[i].comments.push(c);

  }

  getPostI(i: number) {
    return this.posts[i];
  }

  getPostArray() {
    return this.posts;
  }

}
