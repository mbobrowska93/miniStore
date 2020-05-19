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
  // counter: number;
  totalCost: number;

  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private ourProductsService: OurProductsService) { }

  ngOnInit(): void {
    this.finalProductsArray = this.ourProductsService.returnFinalProducts();
    this.totalCost = this.ourProductsService.returnPrice();
  }

  counterMinus(finalProduct: FinalProduct) {
    this.ourProductsService.minus(finalProduct.product);
    this.totalCost = this.ourProductsService.returnPrice();
  }

  counterPlus(finalProduct: FinalProduct) {
    this.ourProductsService.writeOnTheList(finalProduct.product);
    this.totalCost = this.ourProductsService.returnPrice();
  }

  removeProduct(position: FinalProduct) {
    console.log(position.finalId); // OK
    this.ourProductsService.remove(position);
    this.finalProductsArray = this.ourProductsService.returnFinalProducts();
    this.totalCost = this.ourProductsService.returnPrice();
  }


}
