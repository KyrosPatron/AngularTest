import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-userpostformcomponent',
  templateUrl: './userpostformcomponent.component.html',
  styleUrls: ['./userpostformcomponent.component.css']
})
export class UserpostformcomponentComponent {
  constructor(private loginService: AuthserviceService) { }

  @Output() shootOutUserPost = new EventEmitter<Post>();

  isLogged() {
    return this.loginService.isLogged();
  }

  onSubmit(f: NgForm) {
    const fForm: { title: string, message: string } = f.value;

    console.log(fForm);
    const p: Post = {
      title: fForm.title,
      author: this.loginService.getUser(),
      message: fForm.message,
      comments: []
    };
    f.resetForm();
    alert("Publish successed");
    this.shootOutUserPost.emit(p);
  }

}


