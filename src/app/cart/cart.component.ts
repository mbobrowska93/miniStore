import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OurProductsService } from '../our-products.service';
import { FinalProduct } from '../finalProduct';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  finalProductsArray: FinalProduct[] = [];
  finalProductsArrayRefresh: FinalProduct[] = []; // odswiezenie tablicy po usunieciu pozycji
  counter: number;
  totalCost: number;


  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private ourProductsService: OurProductsService) { }

  ngOnInit(): void {
    this.finalProductsArray = this.ourProductsService.returnFinalProducts();
    this.counter = 1;
    // *** tu trzeba wymyslec jak zrobic zeby od poczatku pokazywalo koszt calkowity, czyli przyrownac do ceny jednostkowej
    this.finalProductsArrayRefresh = this.ourProductsService.returnArray();
  }

  counterMinus(price: number) {
    this.ourProductsService.minus(this.counter);
    this.counter = this.ourProductsService.returnQuantity();
    this.ourProductsService.refresh(price);
    this.totalCost = this.ourProductsService.returnTotalCost();
  }

  counterPlus(price: number) {
    this.ourProductsService.plus(this.counter);
    this.counter = this.ourProductsService.returnQuantity();
    this.ourProductsService.refresh(price);
    this.totalCost = this.ourProductsService.returnTotalCost();
  }

  removeProduct(finalProductsArrayRefresh: FinalProduct) {
    console.log(finalProductsArrayRefresh.finalId); // OK
    this.ourProductsService.remove(finalProductsArrayRefresh);
    this.finalProductsArrayRefresh = this.ourProductsService.returnArray();
  }


}
