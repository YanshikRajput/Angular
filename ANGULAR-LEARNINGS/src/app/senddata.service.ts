import { Injectable } from '@angular/core';
import { IProduct } from './product/Iproduct';
import{ BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenddataService {
  updateProduct(products: IProduct) {
    this.product = products;
    this.product$.next(this.product);
    }
product ={
  Id : 1,
    Title: 'pen',
    Price : 100,
    ExpiryDate: '10-09-1990',
    isInStock : true,
    Quantity: 2 
};
product$ : BehaviorSubject<IProduct>;
    constructor() { 
      this.product$ = new BehaviorSubject(this.product);
    }
    setPrice(price:number){
      this.product.Price=price;
    }
}
