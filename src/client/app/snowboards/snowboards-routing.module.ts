import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SnowboardsComponent } from './snowboards.component';
import {AddSnowboardComponent} from "./add-snowboard/add-snowboard.component";
import {EditSnowboardComponent} from "./edit-snowboard/edit-snowboard.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'snowboards', component: SnowboardsComponent },
      { path: 'add-snowboard', component: AddSnowboardComponent},
      { path: 'edit-snowboard/:id', component: EditSnowboardComponent}
    ])
  ],
  exports: [RouterModule]
})
export class SnowboardsRoutingModule { }
