import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Product} from '@core/models/product.model';

import { environment } from './../.././../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry} from 'rxjs/operators';
import * as Sentry from '@sentry/browser';



interface User {
  email: string;
  gender: string;
  phone: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(environment.url_api);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(environment.url_api, product);
  }

  updateProduct(id: string, changes: Partial<Product> ) {
    return this.http.put(`${environment.url_api}${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}${id}`);
  }

  gerRandomUsers() : Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?results=2')
    .pipe(
      retry(3),
      catchError(this.handleError ),
      map((response: any ) => response.results as User[] )
    );
  }

  getFile() {
    return this.http.get('assets/files/test.txt',{responseType:'text'});
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    Sentry.captureException(error);
    return throwError('ups algo salio mal');
  }

}
