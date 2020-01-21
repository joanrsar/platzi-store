import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';


import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';

import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

   product$: Observable<Product> ;

  constructor(
     private route: ActivatedRoute,
     private productsService: ProductsService
  )  { }

  ngOnInit() {
    this.product$ = this.route.params
    .pipe(
      switchMap((params: Params) =>{
        return  this.productsService.getProduct(params.id);
      })
    );
  }

  /*fetchProduct(id: string) {
    this.productsService.getProduct(id)
      .subscribe(product => {
        this.product = product;
      });
  }*/

  crearProduct() {
    const newProduct: Product = {
      id: '223',
      title : 'Nuevod desde angular',
      image : 'assets/images/banner-1.jpg',
      price : 30000,
      description : 'Nuevo product'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log (product);
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      title : 'Nuevo desde angular',
      price : 55500,
      description : 'Edicion titulo'
    };
    this.productsService.updateProduct('223', updateProduct)
    .subscribe(product => {
      console.log (product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('223')
    .subscribe(rta => {
      console.log (rta);
    });
  }

  getRandomUsers() {
    this.productsService.gerRandomUsers()
    .subscribe(users => {
      console.log(users);
    },
    error => {
      console.error(error);
    }
    );
  }

  getDataFile() {
    this.productsService.getFile()
      .subscribe(content => {
        console.log(content);
      },
      error => {
        console.log(error);
      }
      );
  }

  getFile() {
    this.productsService.getFile()
      .subscribe(content => {
        const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
        FileSaver.saveAs(blob, 'archivo.txt');
      },
      error => {
        console.log(error);
      }
      );
  }

}
