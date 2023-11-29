import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ProblemsService } from '../services/problems.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Problem } from '../model/problem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-problem-form',
  templateUrl: './problem-form.component.html',
  styleUrls: ['./problem-form.component.css']
})
export class ProblemFormComponent {

  form = this.formBuilder.group({
    name:[''],
    description: [''],
    level: ['']
  });

  constructor(
        private formBuilder: NonNullableFormBuilder,
        private service: ProblemsService,
        private snackbar: MatSnackBar,
        private location: Location,
        private route: ActivatedRoute
    ){
      const problem: Problem = this.route.snapshot.data['problem'];
      console.log(problem);



  }
  onSubmit(){
    this.service.save(this.form.value).subscribe({
      next: (result) => {this.OnSucess()},
      error:() => {this.OnError()},
      complete:() => {this.onCancel()}
    });
  }
  onCancel(){
    this.location.back();
  }
  private OnSucess(){
    this.snackbar.open('Problema Salvo com Sucesso!', '',{duration: 3000});
  }
  private OnError(){
    this.snackbar.open('Erro ao salvar problema', '', {duration: 3000});
  }


}
