import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Problem } from '../model/problem';

@Component({
  selector: 'app-problems-list',
  templateUrl: './problems-list.component.html',
  styleUrls: ['./problems-list.component.css']
})
export class ProblemsListComponent {
  @Input() problems: Problem[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  readonly displayedColumns = ['name', 'description', 'level', 'actions'];

  onAdd(){
    this.add.emit(true);
  }
  onEdit(problem: Problem){
    this.edit.emit(problem);

  }

}
