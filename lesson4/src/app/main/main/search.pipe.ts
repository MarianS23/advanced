import { Pipe, PipeTransform } from '@angular/core';
import { IContacts } from '../main.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(items: any[], searchField: string): any {
    if (!items) return [];
    if (!searchField) return items;
    return items.filter(item => item.firstName.toLowerCase().includes(searchField.toLowerCase())
      || item.lastName.toLowerCase().includes(searchField.toLowerCase())
      || item.number.toLowerCase().includes(searchField.toLowerCase()))
  }

}
