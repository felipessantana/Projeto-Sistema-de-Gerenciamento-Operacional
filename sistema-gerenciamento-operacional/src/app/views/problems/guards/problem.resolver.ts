import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProblemsService } from '../services/problems.service';
import { Problem } from '../model/problem';
import { inject } from '@angular/core';

export const problemResolver:ResolveFn<Observable<Problem>> =
  (route, state,
    service: ProblemsService = inject(ProblemsService) ) => {

  if(route.params?.['id']){
    return service.loadById(route.params['id']);
  }
  return of({_id:'', name:'',description:'', level:''});
};
