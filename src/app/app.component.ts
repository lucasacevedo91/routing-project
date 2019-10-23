import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project with http calls';
  users: any[] = [];
  data: any;

  constructor(protected _userService: UserService){  }

  ngOnInit(){
    this._userService.getUsers().subscribe(
      data => {
        this.data = data['results'];
        this.users = data['results'];
      }
    )
  }
}
