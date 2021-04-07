import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {IpurchaseItems} from './IpurchaseItems';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchase: IpurchaseItems[] = [];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.purchase = this.data.getPurchase();
    // console.log(this.purchase);
  }  
}
