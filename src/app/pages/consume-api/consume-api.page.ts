import { Component, OnInit } from '@angular/core';
import { ConsumeService } from 'src/app/services/consume.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-consume-api',
  templateUrl: './consume-api.page.html',
  styleUrls: ['./consume-api.page.scss'],
})
export class ConsumeAPIPage implements OnInit {

  joke: string;
  constructor(
    private data: DataService,
    private consume: ConsumeService
  ) {

  }

  ngOnInit() {
    this.callService();
  }

  callService() {
    this.data.setIsLoadingEvent(true);
    this.consume.getJoke().subscribe(resp => {
      this.data.setIsLoadingEvent(false);
      console.log(resp);
      this.joke = resp.value.joke;
    });
  }

}
