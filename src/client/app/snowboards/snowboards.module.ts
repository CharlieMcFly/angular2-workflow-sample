import { NgModule } from '@angular/core';
import { SnowboardsComponent } from './snowboards.component';
import { SnowboardsRoutingModule } from './snowboards-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SnowboardListService } from '../shared/snowboard-list/snowboard-list.service';

@NgModule({
  imports: [SnowboardsRoutingModule, SharedModule],
  declarations: [SnowboardsComponent],
  exports: [SnowboardsComponent],
  providers: [SnowboardListService]
})
export class SnowboardsModule { }
