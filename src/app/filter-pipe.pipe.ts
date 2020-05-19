import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(productsArray: Product[], searchText: any): any {
    if(searchText === undefined) 
      return productsArray;
    return productsArray.filter(function(product){
      return product.name.toLowerCase().includes(searchText.toLowerCase());
    })

  }
}
