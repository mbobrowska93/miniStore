import { Injectable } from '@angular/core';
import { Product } from './product';
import { FinalProduct } from './finalProduct';
import { DataInitializerService } from './data-initializer.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private myArray: Product[] = this.dataInitializerService.returnProducts();
  private cartArray: FinalProduct[] = [];
  totalCost: number;
  price = 0;

  constructor(public dataInitializerService: DataInitializerService) { }

  returnProducts(): Product[] {
    return this.myArray;
  }

  returnPrice() {
    return this.price;
  }

  writeOnTheList(selectedProduct: Product) {

    if (this.cartArray.filter(x => x.product.id === selectedProduct.id).length > 0) {
      let position = this.cartArray.findIndex(x => x.product.id === selectedProduct.id);
      this.cartArray[position].count += 1;
      this.price += selectedProduct.price;
    }
    else {
      const myFinalProduct: FinalProduct = new FinalProduct(selectedProduct, 1, this.cartArray.length + 1);
      this.cartArray.push(myFinalProduct);
      this.price += (myFinalProduct.count * selectedProduct.price);
    }
  }

  minus(selectedProduct: Product) {
    if (this.cartArray.filter(x => x.product.id === selectedProduct.id).length > 0) {
      let position = this.cartArray.findIndex(x => x.product.id === selectedProduct.id);
      if (this.cartArray[position].count > 0) {
        this.cartArray[position].count -= 1;
        this.price -= selectedProduct.price;
      }
      else if (this.cartArray[position].count === 0) { 
        this.cartArray.splice(position, 1);
        return this.cartArray;
      }
    }
  }

  remove(e: FinalProduct) {
    this.cartArray = this.cartArray.filter(x => x.finalId !== e.finalId);
    this.price -= (e.product.price * e.count);
  }

  returnFinalProducts(): FinalProduct[] {
    return this.cartArray;
  }

}
