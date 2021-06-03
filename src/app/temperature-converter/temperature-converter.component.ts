import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { HackerRankService } from '@hacker-rank/shared/services/hacker-rank.service';

@Component({
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.scss']
})
export class TemperatureConverterComponent implements OnInit {
	
  tempValue: number;
  convertedValue: any;
  convertedUnit: any;
  tempUnits: any[] = [];
  selectedUnitSuffix: string;
  selectedTempUnit: string;

  constructor(private hrService: HackerRankService, private messageService: MessageService) {
  }

  ngOnInit(): void {
	this.tempUnits = [{
		name: '°C',
		value: 'C'
	}, {
		name: '°F',
		value: 'F'
	}];
  }
  
  convertTemp() {
	this.convertedValue = this.convertTemperature(this.tempValue, this.selectedTempUnit);
  }
  
  clearValues() {
	this.selectedUnitSuffix = undefined;
	this.selectedTempUnit = undefined;
	this.convertedUnit = undefined;
	this.convertedValue = undefined;
	this.tempValue = undefined;
  }
  
  emitSuffix(event: any) {
	this.selectedUnitSuffix = event.option.label;
	this.convertedUnit = this.tempUnits.filter(opt => opt.value !==  event.option.value.value).map(item => item.name).join('');
  }
  
  private convertTemperature(temp: number, unit: any): any {
	let temperature: number = 0;
	if (temp && !isNaN(temp)) {
		switch(unit.value) {
			case 'C':
				temperature = (temp - 32) / 1.8 ;
				break;
			case 'F':
				temperature = (temp * 32) + 1.8 ;
				break;
			default:
				temperature = 0;
				break;
		}
    }
	return temperature.toFixed(2);
  }
}
