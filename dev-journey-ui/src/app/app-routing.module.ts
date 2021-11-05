import { DesignPatternsComponent } from './components/design-patterns/design-patterns.component';
import { ExploreMainComponent } from './components/explore-main/explore-main.component';
import { ViewMainComponent } from './components/view-main/view-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'design-patterns', // Note: change to view after doing dev on write
    pathMatch: 'full'
  },
  { path: 'view', component: ViewMainComponent },
  { path: 'explore', component: ExploreMainComponent },
  { path: 'design-patterns', component: DesignPatternsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
