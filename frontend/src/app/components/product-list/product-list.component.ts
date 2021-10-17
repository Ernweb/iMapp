import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Product:any = [];

  constructor(private productService: ProductService) {
    this.readProduct();
  }

  ngOnInit() {}

  readProduct(){
    this.productService.getAll().subscribe((data) => {
     this.Product = data;
    })
  }

  removeProduct(product: any, index: any) {
    if(window.confirm('Are you sure?')) {
        this.productService.delete(product._id).subscribe((data) => {
          this.Product.splice(index, 1);
        }
      )
    }
  }

}

