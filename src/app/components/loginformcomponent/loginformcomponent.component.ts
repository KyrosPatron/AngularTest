import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-loginformcomponent',
  templateUrl: './loginformcomponent.component.html',
  styleUrls: ['./loginformcomponent.component.css']
})
export class LoginformcomponentComponent {
  error: string = 'OK';

  constructor(private userService: UserserviceService) { };
  @Input() ShootInLoginLogged!: boolean;

  @Output() shootOutLoginForm = new EventEmitter<User>();

  onSubmit(f: NgForm) {
    const formV: { usrName: string, usrLName: string } = f.value;
    if (f.valid) {
      if (this.userService.getUserArray().filter(i => (i.firstName.toLowerCase().includes(formV.usrName) && i.lastName.toLowerCase().includes(formV.usrLName))).length == 1) {
        const u: User[] = this.userService.getUserArray().filter(i => (i.firstName.toLowerCase().includes(formV.usrName) && i.lastName.toLowerCase().includes(formV.usrLName)))
        this.shootOutLoginForm.emit(u[0]);
        this.error = 'OK';
        //console.log(u[0]);
      } else {
        f.resetForm();
        this.error = 'NOK';
      }
    }

  }
}
