import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  total = 0;
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAll()
                       .subscribe((res: any[]) => {
                         this.products = res;
                         this.chiffreAffaire()
                       })
  }

  deleteProduct(id) {
    this.productService.destroy(id)
                       .then(res => console.log(res))
                       .catch(err => console.log(err))
  }

  takeProduct(product) {
    if(product.stock > 0) {
        this.productService.shopping(product)
                       .then(res => console.log(res))
                       .catch(err => console.log(err))
    }
  
  }


  chiffreAffaire() {
    this.total = this.products.reduce((total, product) => {
      return total + (product.price * product.stock)
    }, 0);
  }

}
