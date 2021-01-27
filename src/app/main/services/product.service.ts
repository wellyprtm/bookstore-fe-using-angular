import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  addProductToCart(data: Product): void{
    const product: Product[] = JSON.parse(localStorage.getItem('productInCart')) || [];
    product.push(data);
    localStorage.setItem('productInCart', JSON.stringify(product));
  }

  getCartProduct(): Product[] {
    const products: Product[] = JSON.parse(localStorage.getItem('productInCart')) || [];
    return products;
  }

  getMasterProduct(): Product[]{
    const products: Product[] = [
      {productId: 1, productTitle: 'FACTFULNESS - 10 Alasan Kita Keliru Tentang Dunia', productAuthor: 'Hans Rosling', productPrice: 88000, isAvailable: true, productImgLocation: '../../../assets/img/book/book1.jpg'},
      {productId: 2, productTitle: 'IKIGAI - The Japanese Secret To a Long And Happy Life', productAuthor: 'Hector Garcia', productPrice: 340000, isAvailable: true, productImgLocation: '../../../assets/img/book/book2.jpg'},
      {productId: 3, productTitle: 'Pemimpin Bermakna', productAuthor: 'Deddy Hermania Iskandar', productPrice: 60000, isAvailable: true, productImgLocation: '../../../assets/img/book/book3.jpg'},
      {productId: 4, productTitle: 'Sebuah Seni untuk Bersikap Bodo Amat', productAuthor: 'Mark Manson', productPrice: 67000, isAvailable: true, productImgLocation: '../../../assets/img/book/book4.jpg'},
      {productId: 5, productTitle: 'Self-Help', productAuthor: 'Samuel Smiles', productPrice: 110000, isAvailable: true, productImgLocation: '../../../assets/img/book/book5.jpg'},
      {productId: 6, productTitle: 'Successful Time Management ', productAuthor: 'Patrick Forsyth', productPrice: 190000, isAvailable: true, productImgLocation: '../../../assets/img/book/book6.jpg'},
      {productId: 7, productTitle: 'The Art Of Being Postive', productAuthor: 'Husna Widyani', productPrice: 75000, isAvailable: true,  productImgLocation: '../../../assets/img/book/book7.jpg'},
      {productId: 8, productTitle: 'The Divine Matrix ', productAuthor: 'Gregg Braden', productPrice: 90000, isAvailable: true,  productImgLocation: '../../../assets/img/book/book8.jpg'},
      {productId: 9, productTitle: 'The Things You Can See Only When You Slow Down ', productAuthor: 'Haemin Sunim', productPrice: 265000, isAvailable: true,  productImgLocation: '../../../assets/img/book/book9.jpg'},
      {productId: 10, productTitle: 'Uncommon Way', productAuthor: 'Jovi Adhiguna', productPrice: 125000, isAvailable: true,  productImgLocation: '../../../assets/img/book/book10.jpg'}
    ];

    return products;
  }
}
