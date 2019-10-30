import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string = "http://dataservice.accuweather.com";
  public apiKey: string = "?apikey=nWWmrippmmeCdISeWZ4YYrSMSeGFK8pT";

  constructor(protected http: HttpClient) { }

  getCity(name): Observable<any>{
    return this.http.get(this.url + "/locations/v1/cities/search" + this.apiKey + "&q=" + name + "&language=es-ar");
  }

  getCurrent(key): Observable<any>{
    return this.http.get(this.url + "/currentconditions/v1/" + key + this.apiKey);
  }
}
