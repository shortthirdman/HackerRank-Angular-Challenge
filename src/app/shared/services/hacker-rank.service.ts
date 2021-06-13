import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PackageSearchResults } from '../models/package-search';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class HackerRankService {

  private cacheStorage: Map<string, string> = new Map<string, string>();

  constructor(private http: HttpClient) { }
  
  getPackages(query: string) {
	return this.http.get<PackageSearchResults>('https://api.npms.io/v2/search?q=scope:angular');
  }

  getCurrencies(): any {
	return this.http.get<any>('https://api.coinbase.com/v2/currencies');
  }
  
  getExchangeRates(currency: string): any {
	return this.http.get<any>(`https://api.coinbase.com/v2/exchange-rates?currency=${currency}`)
  }
  
  setCacheStorage(key: string, data: any) {
    this.cacheStorage.set(key, JSON.stringify(data));
  }
  
  getCacheStorage(key: string) {
    if (this.cacheStorage.get(key)) {
        return JSON.parse(this.cacheStorage.get(key));
    } else {
        return false;
    }
  }

  clearCacheStorageAll() {
    this.cacheStorage.clear();
  }

  deleteCacheStorage(key: string) {
    if (this.cacheStorage.has(key)) {
        this.cacheStorage.delete(key);
    } else {
        return;
    }
  }
}
