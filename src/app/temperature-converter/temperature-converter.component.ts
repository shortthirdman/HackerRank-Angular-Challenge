import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.scss']
})
export class TemperatureConverterComponent implements OnInit {
	
  celsiusValue: number;
  farenheitValue: number;

  constructor() { }

  ngOnInit(): void {
  }
  
  onInputChange(event: any) {}
}
