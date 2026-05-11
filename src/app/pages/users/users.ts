import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from "../../components/user/user";

@Component({
  selector: 'app-users',
  imports: [User],
  templateUrl: './users.html',
  styleUrl: './users.less',
})
export class Users {
  private userService=inject(UsersService);

  allusers=this.userService.getAllUsers();

}
