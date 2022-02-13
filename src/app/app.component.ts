import { OnInit, Component, ViewChild, AfterViewInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(ProductListComponent) productList;
  sessionId: any;
  selectedProduct: any;

  products = [
    { name: 'Rice', id: 1, price: 200 },
    { name: 'Beans', id: 2, price: 300 },
    { name: 'Bananna', id: 3, price: 400 },
  ];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.selectedProduct$.subscribe((value) => {
      this.selectedProduct = value;
    });
    this.productService.setProductList(this.products);
  }

  ngAfterViewInit(): void {
    this.sessionId = this.productList.sessionId;
  }
}
