import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  puntos: number;
  constructor(
    public router: Router,
    private data: DataService
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
  }

}
