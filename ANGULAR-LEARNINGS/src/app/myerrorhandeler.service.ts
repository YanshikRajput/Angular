import { ErrorHandler, Injectable } from '@angular/core';
// import { Console } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class MyerrorhandelerService implements ErrorHandler{

  constructor() { }
  handleError(error:any){
    console.log ("I will handle my all error other than API error");
    
  }
}
