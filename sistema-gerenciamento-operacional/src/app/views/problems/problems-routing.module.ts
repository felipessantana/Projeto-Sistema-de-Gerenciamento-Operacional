import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProblemsComponent } from './problems/problems.component';
import { ProblemFormComponent } from './problem-form/problem-form.component';
import { problemResolver } from './guards/problem.resolver';

const routes: Routes = [
  { path: '', component: ProblemsComponent},
  { path: 'new', component: ProblemFormComponent},
  { path: 'edit/:id', component: ProblemFormComponent, resolve: {problem: problemResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemsRoutingModule { }
