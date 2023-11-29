import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeviceFormComponent } from './containers/device-form/device-form.component';
import { DevicesComponent } from './containers/devices/devices.component';
import { deviceResolver } from './guards/device.resolver';

const routes: Routes = [
  { path: '', component: DevicesComponent},
  { path: 'new', component: DeviceFormComponent, resolve: {device: deviceResolver}},
  { path: 'edit/:id', component: DeviceFormComponent, resolve: {device: deviceResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
