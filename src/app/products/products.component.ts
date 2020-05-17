import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OurProductsService } from '../our-products.service';
import { Product } from '../product';
import { FinalProduct } from '../finalProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsArray: Product[] = [];
  count = 0;
  finalId;

  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private ourProductsService: OurProductsService) { }

  ngOnInit(): void {
    this.productsArray = this.ourProductsService.returnProducts();
  }
  addToCart(myProduct: Product) {
    this.count += 1;
    this.ourProductsService.writeOnTheList(myProduct, this.count, this.finalId); // tu pewnie zle przekazywane, bo to puste wartosci
    this.router.navigateByUrl('/cart', {});

  }
}
