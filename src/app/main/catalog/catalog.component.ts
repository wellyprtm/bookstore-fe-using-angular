import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private spinner: NgxSpinnerService
  ) {
    this.product = new Product();
    this.config = {
      itemsPerPage: 6,
      currentPage: 1
    };
  }
  product: Product;
  config: any;
  productList: Product[];

  // productList: Product[] = this.productService.getMasterProduct();

  ngOnInit(): void {
    this.productList = JSON.parse(localStorage.getItem('productList')) || [];
    // console.log(this.productList);
    if (!this.productList.length){
      console.log(`mosok rene seh`);
      this.productList = this.productService.getMasterProduct();
      localStorage.setItem('productList', JSON.stringify(this.productList));
    }
    this.spinner.hide();
  }

  addToCart(prd: Product): void{

    this.spinner.show();
    this.productService.addProductToCart(prd);
    this.productList = JSON.parse(localStorage.getItem('productList'));
    const idx = this.productList.findIndex((obj => obj.productId === prd.productId));
    this.productList[idx].isAvailable = false;
    localStorage.setItem('productList', JSON.stringify(this.productList));
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

  pageChanged(event): void{
    this.config.currentPage = event;
  }

}
