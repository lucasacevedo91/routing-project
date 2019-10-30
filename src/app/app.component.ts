import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project with http calls';
  data: any;
  city: any;
  public flag: boolean = false;

  constructor(){  }

  ngOnInit(){
    
  }

}
