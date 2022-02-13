import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList = [];

  sessionId = Math.random();

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.productList$.subscribe((value) => {
      this.productList = value;
    });
  }
  onSelectedProduct(product) {
    this.productService.setProduct(product);
  }
}
