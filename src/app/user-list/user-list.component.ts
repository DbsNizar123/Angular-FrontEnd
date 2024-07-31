import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users : User[] = [];

  constructor(private userService : UserService){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.findAll().subscribe(data => {
      this.users = data
  });
}

deleteUser(id: number) : void{
  this.userService.deleteById(id).subscribe(() => {
    this.getUsers();
});
}





}
