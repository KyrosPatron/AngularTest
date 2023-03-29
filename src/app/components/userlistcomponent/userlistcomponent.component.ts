import { Component } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-userlistcomponent',
  templateUrl: './userlistcomponent.component.html',
  styleUrls: ['./userlistcomponent.component.css']
})
export class UserlistcomponentComponent {
  usrArr: User[] = [];
  constructor(private userService: UserserviceService) { }

  ngOnInit() {
    this.usrArr = this.userService.getUserArray();
    //console.log('--------SERVICE INIZIO-----------');
    //console.log(this.userService.getUserArray());
    //console.log('--------SERVICE FINE-----------');

  }

}
