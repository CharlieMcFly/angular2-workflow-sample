/**
 * Created by cquetstroey on 03-03-17.
 */
import  { Component } from '@angular/core';
import {SnowboardListService} from "../../shared/snowboard-list/snowboard-list.service";
import {Snowboard} from "../snowboard";
import {Router} from "@angular/router";

@Component({
  moduleId : module.id,
  selector : 'sd-add-snowboard',
  templateUrl : 'add-snowboard.component.html',
  styleUrls : [ 'add-snowboard.component.css']
})

export class AddSnowboardComponent {

  private model = new Snowboard();
  errorMessage : string;

  constructor(private snowService : SnowboardListService, private router : Router){}

  addSnowboard() {
    this.snowService.post(this.model)
      .subscribe(
      error => this.errorMessage = <any>error
    );
    this.router.navigate(['snowboards']);
  }

}
