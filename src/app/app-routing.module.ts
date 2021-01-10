import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpenWeatherFinderComponent } from './openweather-finder/openweather-finder.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, data: { title: 'Welcome' } },
  { path: 'weather', component: OpenWeatherFinderComponent, data: { title: 'OpenWeather Finder' } },
  { path: 'converter', component: TemperatureConverterComponent, data: { title: 'Temperature Converter' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routeComponents = [TemperatureConverterComponent, OpenWeatherFinderComponent, WelcomeComponent];