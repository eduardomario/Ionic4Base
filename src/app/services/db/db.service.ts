import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  get(key) {
    return localStorage.getItem(key);
  }

  set(key, item) {
    localStorage.setItem(key, item);
  }

  remove(key) {
    localStorage.removeItem(key);
  }
}
