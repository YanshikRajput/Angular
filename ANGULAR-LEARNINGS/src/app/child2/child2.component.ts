import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/Iproduct';
import { SenddataService } from '../senddata.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  product!: IProduct;
  constructor(private data:SenddataService) { }

  ngOnInit(): void {
    this.data.product$.subscribe((c)=>this.product=c);
  }
}
