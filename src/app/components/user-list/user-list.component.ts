import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: any;
  currentUser = null;
  currentIndex = -1;
  name = '';
  message = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.message = '';
    this.retrieveUsers();
  }

  retrieveUsers() {
    this.userService.getAll()
      .subscribe(
        data => {
          this.user = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveUsers();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  setActiveUser(user, index) {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUsers() {
    this.userService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveUsers();
        },
        error => {
          console.log(error);
          this.message = 'Usuários não podem ser deletados, existem tarefas vinculadas!';

        });
  }

  searchName() {
    this.userService.findByName(this.name)
      .subscribe(
        data => {
          this.user = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
