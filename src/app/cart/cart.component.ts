import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { FinalProduct } from '../finalProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  finalProductsArray: FinalProduct[] = [];
  totalCost: number;

  constructor(private router: Router, private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.finalProductsArray = this.ProductsService.returnFinalProducts();
    this.totalCost = this.ProductsService.returnPrice();
  }

  counterMinus(finalProduct: FinalProduct) {
    this.ProductsService.minus(finalProduct.product);
    this.totalCost = this.ProductsService.returnPrice();
  }

  counterPlus(finalProduct: FinalProduct) {
    this.ProductsService.writeOnTheList(finalProduct.product);
    this.totalCost = this.ProductsService.returnPrice();
  }

  removeProduct(position: FinalProduct) {
    this.ProductsService.remove(position);
    this.finalProductsArray = this.ProductsService.returnFinalProducts();
    this.totalCost = this.ProductsService.returnPrice();
  }
}
