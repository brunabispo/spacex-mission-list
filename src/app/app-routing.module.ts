import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from "./missionlist/missionlist.component";
import { MissiondetailsComponent } from "./missiondetails/missiondetails.component";

const routes: Routes = [
  {path: '', redirectTo: 'list-details', pathMatch: 'full'}, // http://localhost:4200
  {path: 'list-details', component: MissionlistComponent}, // http://localhost:4200/list-details
  {path: 'item-details/:id', component: MissiondetailsComponent} // http://localhost:4200/item-details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
