import { Component } from '@angular/core';
import { PostserviceService } from 'src/app/services/postservice.service';

@Component({
  selector: 'app-userpostpage',
  templateUrl: './userpostpage.component.html',
  styleUrls: ['./userpostpage.component.css']
})
export class UserpostpageComponent {
  constructor(private postService: PostserviceService) { };

  publishPost(p: Post) {
    this.postService.addPost(p);
  }

}
