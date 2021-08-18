import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapStructureComponent } from './map-structure/map-structure.component';
import { SearchToolComponent } from './search-tool/search-tool.component';

const routes: Routes = [
  {path:'map', component:MapStructureComponent},
  {path:'search', component:SearchToolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
