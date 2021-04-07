import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ValidatorFn, Validators } from '@angular/forms';
import { SenddataService } from '../senddata.service';
import { IProduct } from '../product/Iproduct'; 
function priceRangeValidator(min:number,max:number):ValidatorFn
{
  return(control:AbstractControl):{[key:string]:boolean}|null=>
  {
    if(control.value !==undefined && (isNaN (control.value)||control.value<min||control.value>max))
    {
      return {'priceRange':true};
    }
    return null;
  };
}


 @Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  min = 0;
  max = 10000000;
  productform: FormGroup;
  product : IProduct = {
    Id : 1,
    Title: 'Pen',
    Price : 200,
    ExpiryDate: '10-08-1999',
    isInStock : true,
    Quantity: 2 
   };
  constructor(private senddata: SenddataService) { }
  ngOnInit(): void {
    this.senddata.product$.subscribe(data => {
      this.product = data;
    })
    this.productform = new FormGroup({
      Id: new FormControl(this.product?.Id, [Validators.required]),
      Title: new FormControl(this.product?.Title, [Validators.required]),
      Price: new FormControl(this.product.Price, [Validators.required, priceRangeValidator(this.min,this.max)]),
      ExpiryDate: new FormControl(this.product?.ExpiryDate, [Validators.required]),
      Quantity: new FormControl(this.product?.Quantity, [Validators.required]),
      isInStock: new FormControl(this.product?.isInStock, [Validators.required]),
    });
  }
    Id : number;
    Title: string;
    Price : number;
    ExpiryDate: string;
    isInStock : boolean;
    Quantity: number; 
 
  // sendData() {
  //   this.senddata.setPrice(this.input1);
  // }
 
  updateProduct():  void{
    this.senddata.updateProduct(this.productform.value);
  }
 
}