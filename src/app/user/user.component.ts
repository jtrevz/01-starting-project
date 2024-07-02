import { Component, Input, Output, EventEmitter, output } from '@angular/core';

// type User = { id: string; avatar: string; name: string }; //type can be any type

interface User {
  id: string;
  avatar: string;
  name: string;
} // interface only used for object types

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
