import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
