/**
 * Created by cquetstroey on 03-03-17.
 */
import 'rxjs/add/operator/switchMap';
import  {Component, OnInit} from '@angular/core';
import {SnowboardListService} from "../../shared/snowboard-list/snowboard-list.service";
import {Snowboard} from "../snowboard";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  moduleId : module.id,
  selector : 'sd-edit-snowboard',
  templateUrl : 'edit-snowboard.component.html',
  styleUrls : [ 'edit-snowboard.component.css']
})

export class EditSnowboardComponent implements OnInit {

  errorMessage : string;
  snowboard : any;

  constructor(private route : ActivatedRoute,
              private router : Router,
              private snowService : SnowboardListService) {
      this.snowboard = new Snowboard;
  }

  editSnowboard() {
    //console.log(this.snowboard);
    this.snowService.post(this.snowboard)
      .subscribe(
      error => this.errorMessage = <any>error
    );
    //console.log("Le snowboard " + this.snowboard.id + " a été edité");
    this.router.navigate(['snowboards']);
  }

  ngOnInit() {
     this.route.params.subscribe((params: Params) => {
       let idSnow = params['id'];
       this.getSnowboardById(idSnow);
    });
  }

  getSnowboardById(id : number) {
    this.snowService.getById(id)
      .subscribe(
        snowboard => this.snowboard = snowboard
      );
    console.log(id + " a été sélectionné");
  }


}
