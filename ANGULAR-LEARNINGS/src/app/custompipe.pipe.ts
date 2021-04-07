import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product/Iproduct';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: IProduct[], args: number): IProduct[] {
    if(!args){
      return value;
    }
    return value.filter(item=>(item.Price>=args));   
  }

}
