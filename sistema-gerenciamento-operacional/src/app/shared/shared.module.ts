import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { SectorPipe } from './pipes/sector.pipe';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    SectorPipe,
    ConfirmationDialogComponent

  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[
    ErrorDialogComponent,
    SectorPipe,
    ConfirmationDialogComponent



  ]
})
export class SharedModule { }
