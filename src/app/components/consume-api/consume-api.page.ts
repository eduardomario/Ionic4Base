import { Component, OnInit } from '@angular/core';
import { ConsumeService } from 'src/app/services/consume.service';

@Component({
  selector: 'app-consume-api',
  templateUrl: './consume-api.page.html',
  styleUrls: ['./consume-api.page.scss'],
})
export class ConsumeAPIPage implements OnInit {

  joke: string;
  constructor(private consume: ConsumeService) {

  }

  ngOnInit() {
    this.callService();
  }

  callService() {
    this.consume.getJoke().subscribe(resp => {
      console.log(resp);
      this.joke = resp.value.joke;
    });
  }

}
