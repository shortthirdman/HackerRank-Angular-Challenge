import { Component, OnInit } from '@angular/core';

import { Currency, CurrencyOption } from '../shared/models/currency';

@Component({
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
	
  private currencies: Currency[] = [];
  currencyOptions: CurrencyOption[] = [];

  constructor(private hackerRankService: HackerRankService) { }

  ngOnInit(): void {
	this.hackerRankService.getCurrencies().subscribe((response) => this.currencies = response.data);
	if (this.currencies && this.currencies.length > 0) {
		this.currencyOptions = [];
		this.currencies.forEach(currency => this.currencyOptions.unshift({ label: currency?.name, value: currency?.id }));
	}
  }

}
