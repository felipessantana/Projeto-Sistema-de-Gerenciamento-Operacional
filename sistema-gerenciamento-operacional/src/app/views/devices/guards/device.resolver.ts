import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Device } from '../model/device';
import { DevicesService } from '../services/devices.service';

export const deviceResolver: ResolveFn<Observable<Device>> =
  (route, state,
     service: DevicesService = inject(DevicesService)) => {


  if (route.params?.['id']){
    return service.loadById(route.params['id']);

  }
  return of({_id:'',name:'',sector:''});

};
