import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product_representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductRepresentation[] = [];

  constructor(
    private sevice: ProductService
  ) {
  }
  ngOnInit(): void {
    this.sevice.getAllProductsWithLimit().subscribe({
      next: (result) => {
        this.products = result;
      }
    });
  }

}
