import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

import { Device } from '../../model/device';
import { DevicesService } from '../../services/devices.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent {



  devices$: Observable<Device[]> | null = null;


  constructor(
      private devicesService: DevicesService,
      public dialog: MatDialog,
      private router: Router,
      private route: ActivatedRoute,
      private snackBar: MatSnackBar
      ){

        this.refresh();
  }
  refresh(){
    this.devices$ = this.devicesService.list().pipe(
      catchError(error =>{
        this.onError("Erro ao carregar os Dispositivos");
        return of([])
      })
    );
  }


  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  onEdit(device : Device){
    this.router.navigate(['edit', device._id], {relativeTo: this.route});


  }
  onRemove(device: Device){

      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: 'Tem certeza que deseja remover esse Dispositivo?',
      });

      dialogRef.afterClosed().subscribe((result: boolean) => {
        if(result){
          this.devicesService.remove(device._id).subscribe({
            next:() => {
              this.refresh();
              this.snackBar.open('Dispositivo removido com Sucesso!','x', {
              duration: 5000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center'
              });
            },
            error:() => {this.onError('Erro ao tentar remover dispositivo')},
            complete:() => {this.refresh()}
          });
        }
      });

  }
}

