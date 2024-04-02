import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(valus: any[], filterText: string): any[] {

    return valus ? valus.filter(item => item.title.toLowerCase().includes(filterText)) : []
  }

}
