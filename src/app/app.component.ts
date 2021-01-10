import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  links: any[];

  constructor() {}

  ngOnInit(): void {
	this.links = [
		{ route: 'welcome', label: 'Welcome' },
		{ route: 'weather', label: 'OpenWeather' },
		{ route: 'converter', label: 'Temperature Converter' }
	];
  }
  
  ngOnDestroy(): void {
	localStorage.clear();
  }
}
