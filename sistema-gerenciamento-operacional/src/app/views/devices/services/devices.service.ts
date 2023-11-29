import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Device } from '../model/device';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private readonly API = 'api/devices';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Device[]>(this.API).pipe(
      first(),
      tap(devices => console.log(devices))
    );
  }
  loadById(id: string){
    return this.httpClient.get<Device>(`${this.API}/${id}`);
  }
  save(record: Partial<Device>){

    if (record._id){

      return this.update(record);
    }

    return this.create(record);
  }

  private create(record: Partial<Device>){
    return this.httpClient.post<Device>(this.API, record).pipe(first());
  }
  private update(record: Partial<Device>){
    return this.httpClient.put<Device>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}

