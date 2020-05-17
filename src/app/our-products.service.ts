import { Injectable } from '@angular/core';
import { Product } from './product';
import { FinalProduct } from './finalProduct';

@Injectable({
  providedIn: 'root'
})
export class OurProductsService {

  private p1: Product = new Product(1, 'Bojownik', 8, 'https://i.pinimg.com/474x/71/46/01/714601c83b4b464ccaffc39a8cb0a6c7.jpg');
  private p2: Product = new Product(2, 'Błazenek', 58, 'https://serwer1428786.home.pl/rybka/ZDJ/rybki/nemo.jpg');
  private p3: Product = new Product(3, 'Gupik', 6, 'https://image.ceneostatic.pl/data/article_picture/6f/15/de2c-a69d-41cb-b2ff-a29e917b4980_large.jpg');
  private p4: Product = new Product(4, 'Brzanka sumatrzańska', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYecLXW8TpT34mdYBnn5jrrflj8dhgog09M6MH0Nj0FubcBrAa&usqp=CAU');
  private p5: Product = new Product(5, 'Mandaryn wspaniały', 230, 'https://www.wykop.pl/cdn/c3201142/comment_7NwhQfMKZs6VADsv3N2uPQEdYn2YJA1X.jpg');
  private p6: Product = new Product(6, 'Neonek', 2, 'https://www.medianauka.pl/biologia/grafika/ryby/neon-czerwony.jpg');


  private myArray: Product[] = [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6];
  private cartArray: FinalProduct[] = [];
  private cartArrayRefresh: FinalProduct[] = [];
  counter: number;
  totalCost: number;
  positionToRemove: FinalProduct;

  constructor() { }

  returnProducts(): Product[] {
    return this.myArray;
  }

  writeOnTheList(selectedProduct: Product, count: number, finalId: number) { // tu pewnie zle przekazywane, bo puste wartosci
    const myFinalProduct: FinalProduct = new FinalProduct(selectedProduct, count, finalId);
    this.cartArray.push(myFinalProduct);
    // console.log(myFinalProduct); //
  }

  returnFinalProducts(): FinalProduct[] {
    return this.cartArray;
  }

  minus(value: number) {
    value -= 1;
    this.counter = value;
  }
  plus(value: number) {
    value += 1;
    this.counter = value;
  }

  returnQuantity(): number {
    return this.counter;
  }

  refresh(price: number) {
    this.totalCost = price * this.counter;
  }

  returnTotalCost(): number {
    return this.totalCost;
  }

  remove(e: FinalProduct) {
    console.log(e.finalId); // OK
    this.cartArrayRefresh = this.cartArrayRefresh.filter(x => x.finalId !== e.finalId);
    console.log(this.cartArrayRefresh); // EPMTY, NOK ******************* tu nic nie pokazuje
  }

  returnArray(): FinalProduct[] {
   return this.cartArrayRefresh;
  }

}
