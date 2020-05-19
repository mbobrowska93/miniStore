import { Injectable } from '@angular/core';
import { Product } from './product';
import { FinalProduct } from './finalProduct';


@Injectable({
  providedIn: 'root'
})
export class OurProductsService {

  private p1: Product = new Product(1, 'Bojownik wspaniały', 8, 'https://i.pinimg.com/474x/71/46/01/714601c83b4b464ccaffc39a8cb0a6c7.jpg');
  private p2: Product = new Product(2, 'Błazenek', 58, 'https://serwer1428786.home.pl/rybka/ZDJ/rybki/nemo.jpg');
  private p3: Product = new Product(3, 'Gupik pawie oczko', 6, 'https://image.ceneostatic.pl/data/article_picture/6f/15/de2c-a69d-41cb-b2ff-a29e917b4980_large.jpg');
  private p4: Product = new Product(4, 'Brzanka sumatrzańska', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYecLXW8TpT34mdYBnn5jrrflj8dhgog09M6MH0Nj0FubcBrAa&usqp=CAU');
  private p5: Product = new Product(5, 'Mandaryn wspaniały', 230, 'https://www.wykop.pl/cdn/c3201142/comment_7NwhQfMKZs6VADsv3N2uPQEdYn2YJA1X.jpg');
  private p6: Product = new Product(6, 'Neon innesa', 2, 'https://www.medianauka.pl/biologia/grafika/ryby/neon-czerwony.jpg');
  private p7: Product = new Product(7, 'Zebrasoma', 300, 'https://www.reefguard.pl/wp-content/uploads/2016/11/Zebrasoma-flavescens-L.jpg');
  private p8: Product = new Product(8, 'Kirysek lamparci', 10, 'https://rybyakwariowe.eu/media/kirysek-wspanialy-mozaikowy-corydoras-haraldschultzi.jpg');
  private p9: Product = new Product(9, 'Pokolec królewski', 250, 'https://img-ovh-cloud.zszywka.pl/0/0379/9840-pokolec-krolewski.jpg');
  private p10: Product = new Product(10, 'Pielęgniczka ramireza', 14, 'https://podwodnekrolestwo.pl/wp-content/uploads/2016/01/Piel%C4%99gnica-Ramireza.jpg');
  private p11: Product = new Product(11, 'Skalar', 17, 'https://image.ceneostatic.pl/data/article_picture/30/77/1071-2e76-4589-9da4-7322046a9a12_large.jpg');
  private p12: Product = new Product(12, 'Paletka dyskowiec', 22, 'https://lh3.googleusercontent.com/proxy/OsLLfAYCsWNw2ZPGJ1XDzgEvNnYCGFVADx_ywJ63Up0CwnTGBjhSz2CGO3wLgzpePtOcHl4Ik7JNpQpKBJa0UfTLz3DABbQegIBwPDaXdtYQr4c8fonzImxv5cmWicwH');
  private p13: Product = new Product(13, 'Rogatnica jasnoplama', 380, 'https://www.profundal.pl/wp-content/uploads/2015/02/rogatnica.jpg');
  private p14: Product = new Product(14, 'Apogon kardynał', 90, 'https://reefshop.pl/environment/cache/images/500_500_productGfx_8c915495c6e09ca05bd4e0d6662b3f91.jpg');
  private p15: Product = new Product(15, 'Motylek czarnopręgi', 143, 'https://lh3.googleusercontent.com/proxy/PcvqzhrXzykz_Plg2hE91VZiBA4YNN8TbcbOO63D4zfyeM3K9cI_oDWhWp9PPZ7b1zJQ2iIaflZICNZ-Wkr8g30vdWg-R5VcTdxt872uCjH6DXEywQUFMPsEC7grfyr134g9');

  private myArray: Product[] = [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6, this.p7, this.p8, this.p9, this.p10, this.p11, this.p12, this.p13, this.p14, this.p15];
  private cartArray: FinalProduct[] = [];
  counter: number;
  totalCost: number;
  price = 0;


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
    }
    else {
      const myFinalProduct: FinalProduct = new FinalProduct(selectedProduct, 1, this.cartArray.length + 1);
      this.cartArray.push(myFinalProduct);
      this.price += (myFinalProduct.count * selectedProduct.price);
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
    this.cartArray = this.cartArray.filter(x => x.finalId !== e.finalId);
    this.price -= (e.product.price * e.count);
  }

  returnFinalProducts(): FinalProduct[] {
    return this.cartArray;
  }

}
