import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { faTrash, faEraser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }
  faTrash = faTrash;
  faEraser = faEraser;
  productList: Product[] = JSON.parse(localStorage.getItem('productInCart')) || [];
  ngOnInit(): void {
  }

  deleteItem(product: Product): void{
    let products: Product[] = JSON.parse(localStorage.getItem('productList'));
    const idx = this.productList.findIndex((obj => obj.productId === product.productId));
    this.productList.splice(idx, 1);
    localStorage.setItem('productInCart', JSON.stringify(this.productList));
    const idxExst = products.findIndex((prd => prd.productId === product.productId));
    products[idxExst].isAvailable = true;
    localStorage.setItem('productList', JSON.stringify(products));
  }

  getTotalPrice(): number{
    let total = 0;
    const product: Product[] = JSON.parse(localStorage.getItem('productInCart')) || [];
    if (product.length){
      console.log(JSON.stringify(product));
      product.forEach(prd => total += prd.productPrice);
    }
    return total;
  }

}
