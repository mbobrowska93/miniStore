import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OurProductsService } from '../our-products.service';
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

  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private ourProductsService: OurProductsService) { }

  ngOnInit(): void {
    this.productsArray = this.ourProductsService.returnProducts();

  }
  addToCart(myProduct: Product) {
    this.ourProductsService.writeOnTheList(myProduct);
    // this.router.navigateByUrl('/cart', {});
  }
  goToCart() {
    this.router.navigateByUrl('/cart', {});
  }
}

