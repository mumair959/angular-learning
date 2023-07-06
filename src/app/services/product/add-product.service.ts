import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor() { }

  addProduct(product: any, variants: any) {
    console.log(product);
    console.log(variants);
  }
}
