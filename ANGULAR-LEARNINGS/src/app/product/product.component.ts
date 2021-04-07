import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {IProduct} from './Iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private data:DataService) { }

  ngOnInit(): void {
   
    this.products = this.data.getProducts();
  }
  searchtext:string;
  filterprice:number;

}
