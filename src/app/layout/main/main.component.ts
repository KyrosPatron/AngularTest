import { Component } from '@angular/core';
import { PostserviceService } from 'src/app/services/postservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private postService: PostserviceService) { }

  ngOnInit() {

    this.postService.fillExample();
  }

}
