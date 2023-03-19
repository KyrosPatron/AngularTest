import { Component } from '@angular/core';
import { PostserviceService } from 'src/app/services/postservice.service';

@Component({
  selector: 'app-postlistcomponent',
  templateUrl: './postlistcomponent.component.html',
  styleUrls: ['./postlistcomponent.component.css']
})
export class PostlistcomponentComponent {
  constructor(private postService: PostserviceService) { }

  posts: Post[] = this.postService.getPostArray();

  getNPost() {
    return this.posts.length;
  }


  addComment(i: number, c: Commento) {


    this.postService.addComment(i, c);
    console.log('inserito');

  }


}
