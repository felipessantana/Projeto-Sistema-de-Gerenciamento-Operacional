import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sector'
})
export class SectorPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value){
      case 'Sul': return 'arrow_downward';
      case 'Norte': return 'arrow_upward';
      case 'Leste': return 'arrow_forward';
      case 'N2': return 'arrow_back';
      case 'Visitante': return 'arrow_downward';
      case 'SuperNorte': return 'arrow_upward';
      case 'Oeste-2': return 'arrow_back';

    }
    return 'home';
  }

}
