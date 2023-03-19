import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/authservice.service';


@Component({
  selector: 'app-postitemcomponent',
  templateUrl: './postitemcomponent.component.html',
  styleUrls: ['./postitemcomponent.component.css']
})
export class PostitemcomponentComponent {

  @Input() shootInPost!: Post;

  @Output() shootOutPostItem = new EventEmitter<Commento>();


  constructor(private loginService: AuthserviceService) { };

  onSubmit(f: NgForm) {
    const s: { usrCom: string } = f.value
    let c: Commento = { author: this.loginService.getUser(), message: s.usrCom };
    f.resetForm();
    this.shootOutPostItem.emit(c);

  }

  isLogged() {
    return this.loginService.isLogged();
  }
}
