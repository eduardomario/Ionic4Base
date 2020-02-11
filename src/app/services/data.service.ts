import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DbService } from './db/db.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private db: DbService
  ) { }

  private isLogged: boolean;
  private isLoggedEvent = new Subject<boolean>();

  getIsLogged() {
    return this.isLogged;
  }

  getIsLoggedEvent() {
    return this.isLoggedEvent.asObservable();
  }

  setIsLoggedEvent(isLogged: boolean) {
      this.isLogged = isLogged;
      this.isLoggedEvent.next(isLogged);
  }

  darkMode(event: boolean) {
    document.body.classList.toggle('dark', event);
  }

  setDarkMode(active: boolean) {
    this.db.set('darkMode', active);
    this.darkMode(active);
  }

  getDarkMode() {
    const darkMode = (this.db.get('darkMode') === 'true');
    this.darkMode(darkMode);
    return darkMode;
  }
}
