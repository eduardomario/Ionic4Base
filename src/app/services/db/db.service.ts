import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(
    private storage: Storage
  ) { }

  get(key) {
    return this.storage.get(key);
  }

  set(key, item) {
    this.storage.set(key, item);
  }

  remove(key) {
    this.storage.remove(key);
  }
}
