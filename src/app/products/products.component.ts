import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  page = 1;
  totalRecords: string;
  productsArray: Product[] = [];
  count = 0;
  finalId = 0;
  searchText;

  constructor(private router: Router, private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.productsArray = this.ProductsService.returnProducts();

  }
  addToCart(myProduct: Product) {
    this.ProductsService.writeOnTheList(myProduct);
  }
  goToCart() {
    this.router.navigateByUrl('/cart', {});
  }
}

