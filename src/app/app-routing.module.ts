import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpenWeatherFinderComponent } from './openweather-finder/openweather-finder.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PackageSearchComponent } from './package-search/package-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, data: { title: 'Welcome' } },
  { path: 'temperature-converter', component: TemperatureConverterComponent, data: { title: 'Temperature Converter' } },
  { path: 'weather', component: OpenWeatherFinderComponent, data: { title: 'OpenWeather Finder' } },
  { path: 'package-search', component: PackageSearchComponent, data: { title: 'NPM Package Search' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routeComponents = [TemperatureConverterComponent, OpenWeatherFinderComponent, WelcomeComponent, PackageSearchComponent];