import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: any[] = [];
  public city: any;

  constructor(protected _cityService: UserService) { }

  ngOnInit() {
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
        console.table(this.city);
      }
    )
  }

}
