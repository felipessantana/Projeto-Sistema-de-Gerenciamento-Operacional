import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [

  {path: '', component: HomeComponent },
  {
    path: 'devices',
    loadChildren: () => import('./views/devices/devices.module').then(m => m.DevicesModule)
  },
  {
    path: 'problems',
    loadChildren: () => import('./views/problems/problems.module').then(m => m.ProblemsModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
