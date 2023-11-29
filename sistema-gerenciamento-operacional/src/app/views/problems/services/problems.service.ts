import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Problem } from '../model/problem';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  private readonly API = '../../../../assets/problems.json';


  constructor(private httpClient: HttpClient ) { }

  list(){
    return this.httpClient.get<Problem[]>(this.API).pipe(
      first(),
      tap(problems => console.log(problems))
    );
  }
  loadById(id: string){
    return this.httpClient.get<Problem>(`${this.API}/${id}`);
  }
  save(record: Partial<Problem>){
    return this.httpClient.post<Problem>(this.API, record).pipe(first());
  }

}
