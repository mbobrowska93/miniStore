import { Component, OnInit } from '@angular/core';
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

  productsArray: Product[] = [];
  count = 0;
  finalId = 0;
  searchText;

  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private ourProductsService: OurProductsService) { }

  ngOnInit(): void {
    this.productsArray = this.ourProductsService.returnProducts();

  }
  addToCart(myProduct: Product) {
    // this.count += 1;
    // this.finalId += 1;  // final id i count caly czas pokazuje nam 1, bo po przekierowaniu do koszyka nam to zeruje
    this.ourProductsService.writeOnTheList(myProduct);
    this.router.navigateByUrl('/cart', {});
    console.log('Id dodanego produktu:', this.finalId);
  }

}
