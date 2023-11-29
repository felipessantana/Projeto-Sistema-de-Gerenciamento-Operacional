import { Component } from '@angular/core';
import { Problem } from '../model/problem';
import { ProblemsService } from '../services/problems.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent {

  problems$: Observable<Problem[]> ;


  constructor(
      private problemsService: ProblemsService,
      public dialog: MatDialog,
      private router: Router,
      private route: ActivatedRoute){
    this.problems$ = this.problemsService.list().pipe(
      catchError(error => {
        this.onError("Erro ao carregar os Problemas");
        return of([])
      })
    );
  }
  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    });
  }
  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  onEdit(problem : Problem){
    this.router.navigate(['edit', problem._id], {relativeTo: this.route});
  }

}
