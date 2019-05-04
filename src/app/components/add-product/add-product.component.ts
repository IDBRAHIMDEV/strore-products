import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  myProduct = {
    title: '',
    price: 0,
    stock: 0,
    active: false
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  saveProduct() {
    this.productService.save(this.myProduct)
                       .then(res => console.log(res))
                       .catch(err => console.log(err))
  }

}
