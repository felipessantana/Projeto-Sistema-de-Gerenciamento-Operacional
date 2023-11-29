import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './containers/devices/devices.component';
import { DeviceFormComponent } from './containers/device-form/device-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DevicesListComponent } from './components/devices-list/devices-list.component';





@NgModule({
  declarations: [
    DevicesComponent,
    DeviceFormComponent,
    DevicesListComponent,

  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class DevicesModule { }
