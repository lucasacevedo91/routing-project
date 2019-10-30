import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CitiesComponent } from './components/cities/cities.component';
import { HeadbarComponent } from './components/headbar/headbar.component';

@NgModule({
  declarations: [
    HeadbarComponent,
    AppComponent,
    CitiesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
