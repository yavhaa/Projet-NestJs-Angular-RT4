import { Injectable } from '@angular/core';
import {User} from "../Model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  constructor() {
    this.users = [
      new User(1, 'user1', 'user1', new Date(1999,5,12), 123456),
      new User(2, 'user2', 'user2', new Date(2001,12,3), 123456),
      new User(3,'user3', 'user3', new Date(2003,10,20), 123456),
    ];
  }
}
