import { Component } from '@angular/core';
import { UserserviceService } from './services/userservice.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestConoscenzeAngular';
  error: string | null = null;


  constructor(private userService: UserserviceService) { }


  // Same thing in /layout/main
  ngOnInit() {
    this.userService.serviceOnInit();
  }
}
