import { NgModule } from '@angular/core';
import { SnowboardsComponent } from './snowboards.component';
import { SnowboardsRoutingModule } from './snowboards-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SnowboardListService } from '../shared/snowboard-list/snowboard-list.service';
import {AddSnowboardComponent} from "./add-snowboard/add-snowboard.component";
import {EditSnowboardComponent} from "./edit-snowboard/edit-snowboard.component";

@NgModule({
  imports: [SnowboardsRoutingModule, SharedModule],
  declarations: [SnowboardsComponent, AddSnowboardComponent, EditSnowboardComponent],
  exports: [SnowboardsComponent, AddSnowboardComponent, EditSnowboardComponent],
  providers: [SnowboardListService]
})
export class SnowboardsModule { }
