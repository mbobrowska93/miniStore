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
  private p7: Product = new Product(7, 'Zebrasoma', 300, 'https://www.reefguard.pl/wp-content/uploads/2016/11/Zebrasoma-flavescens-L.jpg');


  private myArray: Product[] = [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6];
  private cartArray: FinalProduct[] = [];
  counter: number;
  totalCost: number;
  price = 0;
  // positionToRemove: FinalProduct;

  constructor() { }

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
      console.log(this.price);
    }
    else {
      const myFinalProduct: FinalProduct = new FinalProduct(selectedProduct, 1, this.cartArray.length + 1);
      this.cartArray.push(myFinalProduct);
      console.log('dodany produkt, ilosc i nowe id', myFinalProduct);
      this.price += (myFinalProduct.count * selectedProduct.price);
      console.log(this.price);
    }
  }

  minus(selectedProduct: Product) {
    if (this.cartArray.filter(x => x.product.id === selectedProduct.id).length > 0) {
      // sprawdzam wsrod iksow (czyli produktow z tablicy cartArray), czy jakis x (x.product.id) juz istnieje z tym id co moj selected product
      let position = this.cartArray.findIndex(x => x.product.id === selectedProduct.id);
      if (this.cartArray[position].count > 0) {
        this.cartArray[position].count -= 1;
        this.price -= selectedProduct.price;
      }
      else if (this.cartArray[position].count === 0) { // jak juz jest 0 to jeszcze raz trzeba kliknac - zeby usunelo
        this.cartArray.splice(position, 1);
        return this.cartArray;
      }
    }
  }

  remove(e: FinalProduct) {
    console.log('id w koszyku wskazanej do usuniecia pozycji', e.finalId); // OK
    this.cartArray = this.cartArray.filter(x => x.finalId !== e.finalId);
    console.log('tablica koszyka po usunieciu pozycji', this.cartArray); // OK
    this.price -= (e.product.price * e.count);
  }

  returnFinalProducts(): FinalProduct[] {
    return this.cartArray;
  }

}
