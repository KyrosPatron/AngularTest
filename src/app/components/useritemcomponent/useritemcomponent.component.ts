import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-useritemcomponent]',
  templateUrl: './useritemcomponent.component.html',
  styleUrls: ['./useritemcomponent.component.css']
})
export class UseritemcomponentComponent {
  @Input() shootInUserItem !: User;

}
