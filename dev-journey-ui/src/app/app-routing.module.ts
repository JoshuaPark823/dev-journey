import { WriteMainComponent } from './components/write-main/write-main.component';
import { ViewMainComponent } from './components/view-main/view-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'write', // Note: change to view after doing dev on write
    pathMatch: 'full'
  },
  { path: 'view', component: ViewMainComponent },
  { path: 'write', component: WriteMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
