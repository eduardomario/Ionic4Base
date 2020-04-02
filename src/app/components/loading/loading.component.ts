import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

  loading: boolean;
  constructor(private data: DataService) {
    this.data.getIsLoadingEvent().subscribe((isLoad) => {
      this.loading = isLoad;
    });
  }

  ngOnInit() {}

}
