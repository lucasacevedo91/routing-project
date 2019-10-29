import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { CitiesComponent } from './components/cities/cities.component';
//import { CityComponent } from './components/city/city.component';
import { HeadbarComponent } from './components/headbar/headbar.component';

@NgModule({
  declarations: [
    HeadbarComponent,
    AppComponent,
    CitiesComponent,
    /*CityComponent*/
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
