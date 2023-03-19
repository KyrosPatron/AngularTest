import { Component } from '@angular/core';
import { UserserviceService } from './services/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestConoscenzeAngular';
  constructor(private userService: UserserviceService) { }
  // Same thing in /layout/main
  ngOnInit() {

    this.userService.fillExample();
  }
}
