import { ExploreMainComponent } from './components/explore-main/explore-main.component';
import { WriteMainComponent } from './components/write-main/write-main.component';
import { ViewMainComponent } from './components/view-main/view-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'explore', // Note: change to view after doing dev on write
    pathMatch: 'full'
  },
  { path: 'view', component: ViewMainComponent },
  { path: 'write', component: WriteMainComponent },
  { path: 'explore', component: ExploreMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
