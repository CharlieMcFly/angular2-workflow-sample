import { Component, OnInit } from '@angular/core';
import { SnowboardListService } from '../shared/snowboard-list/snowboard-list.service';


@Component({
  moduleId : module.id,
  selector : 'sd-snowboards',
  templateUrl : 'snowboards.component.html',
  styleUrls : [ 'snowboards.component.css']
})

export class SnowboardsComponent implements OnInit {

  snows : any[];
  errorMessage: string;


  constructor(private snowService : SnowboardListService){}

  ngOnInit() {
    this.getSnowboards();
  }

  getSnowboards() {
    this.snowService.get()
      .subscribe(
        snows => this.snows = snows,
        error => this.errorMessage = <any>error
      )
  }
}
