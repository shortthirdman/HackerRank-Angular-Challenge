import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  links: any[];

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
	this.primengConfig.ripple = true;
	this.links = [
		{ route: 'welcome', label: 'Welcome' },
		{ route: 'weather-finder', label: 'OpenWeather' },
		{ route: 'temperature-converter', label: 'Temperature Converter' },
		{ route: 'package-search', label: 'Package Search' }
	];
  }
  
  ngOnDestroy(): void {
	localStorage.clear();
  }
}
