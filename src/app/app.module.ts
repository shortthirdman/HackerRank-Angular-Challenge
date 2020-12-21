import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { OpenWeatherFinderComponent } from './openweather-finder/openweather-finder.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureConverterComponent,
    OpenWeatherFinderComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TemperatureConverterComponent, OpenWeatherFinderComponent, WelcomeComponent]
})
export class AppModule { }
