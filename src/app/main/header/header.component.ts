import { Component, OnInit } from '@angular/core';
import { faHome, faShoppingCart, faBook } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public productService: ProductService
  ) { }
  faHome = faHome;
  faShoppingCart = faShoppingCart;
  faCatalog = faBook;
  order = 0;
  ngOnInit(): void {
  }

}
