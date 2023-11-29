import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { DevicesService } from '../../services/devices.service';
import { Device } from '../../model/device';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent {


  form = this.formBuilder.group({
    _id: [''],
    name:['',[Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)]],
    sector: ['', [Validators.required]]
  });

  constructor( private formBuilder: NonNullableFormBuilder,
     private service: DevicesService,
     private snackBar: MatSnackBar,
     private location: Location,
     private route: ActivatedRoute
     ){
      const device: Device = this.route.snapshot.data['device'];
      this.form.setValue({
        _id: device._id,
        name : device.name,
        sector: device.sector
      });

  }
  onSubmit() {
      this.service.save(this.form.value).subscribe({
      next:(result) => {this.onSuccess()},
      error:() => {this.OnError()},
      complete:()=> {this.onCancel()}
    });
  }

  onCancel(){
    this.location.back();
  }
  private onSuccess(){
    this.snackBar.open('Dispositivo Salvo com Sucesso!','x', {duration: 5000});
  }
  private OnError(){
    this.snackBar.open('Erro ao salvar o dispositivo','x', {duration: 5000});
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if(field?.hasError('required')){
      return 'Campo obrigatório';
    }
    if(field?.hasError('minlength')){
      const requiredLength: number =
      field.errors ? field.errors['minlength']['requiredLength'] : 4;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }
    if(field?.hasError('maxlength')){
      const requiredLength: number =
      field.errors ? field.errors['maxlength']['requiredLength'] : 10;
      return `Tamanho máximo precisa ser de ${requiredLength} caracteres.`;
    }

    return 'Campo Invalido!';

  }
}
