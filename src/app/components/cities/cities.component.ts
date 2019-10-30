import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Ciudad } from '../../models/city.model';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  public found: any[] = [];
  public city: any;
  public end: number = 5;
  public cities: Ciudad[] = [];
  public pic = "../../../assets/sunny-field.jpg";
  public newCity: Ciudad;
  public search: any;


  constructor(protected _cityService: UserService) { }

  ngOnInit() {
    
  }

  increase(){
    this.end += 5;
  }

  findCity(name){
    this._cityService.getCity(name).subscribe(
      response => {
        response.forEach((r, index) => {

          this.found[index] = r;           
        });
        console.log(this.found);
      }
    )
  }

  getCurrentWeather(key, name){
    this._cityService.getCurrent(key).subscribe(
      response => {
        this.city = response;
        console.log(this.city);
      }
    );
  }

  addCity(name, ciudad){
    console.log(ciudad[0].WeatherText);
    this.newCity = new Ciudad(name, ciudad[0].Temperature.Metric.Value, ciudad[0].WeatherText);
    this.cities.push(this.newCity);
    console.table(this.cities);
    console.log(this);
  }
  
}
