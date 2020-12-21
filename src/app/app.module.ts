import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { OpenWeatherFinderComponent } from './openweather-finder/openweather-finder.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureConverterComponent,
    OpenWeatherFinderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TemperatureConverterComponent, OpenWeatherFinderComponent]
})
export class AppModule { }
