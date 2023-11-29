import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemsRoutingModule } from './problems-routing.module';
import { ProblemsComponent } from './problems/problems.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProblemFormComponent } from './problem-form/problem-form.component';
import { ProblemsListComponent } from './problems-list/problems-list.component';


@NgModule({
  declarations: [
    ProblemsComponent,
    ProblemFormComponent,
    ProblemsListComponent
  ],
  imports: [
    CommonModule,
    ProblemsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProblemsModule { }
