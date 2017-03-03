import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SnowboardsComponent } from './snowboards.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'snowboards', component: SnowboardsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SnowboardsRoutingModule { }
