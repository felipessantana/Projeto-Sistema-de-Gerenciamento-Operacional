import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Device } from '../../model/device';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent {


  @Input() devices: Device[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['name', 'sector', 'actions'];


  onAdd(){
    this.add.emit(true);
  }
  onEdit(device: Device){
    this.edit.emit(device);

  }
  onDelete(device: Device){
    this.remove.emit(device);

  }
}
