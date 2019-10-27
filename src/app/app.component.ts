import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project with http calls';
  cities: any[] = [];
  data: any;
  city: any;

  constructor(protected _cityService: UserService){  }

  ngOnInit(){
    this._cityService.getCity().subscribe(
      response => {
        console.log(response);
        response.forEach((r, index) => {
          this.cities[index] = r;           
        });
        console.log(this.cities);
      }
    )
  }

  getCurrentWeather(key){
    this._cityService.getCurrent(key).subscribe(
      response => {
        this.city = response;
        console.log(this.city);
      }
    )
  }
}
