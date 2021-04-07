import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTraining';
  c:string='yellow';
  // a=100;
  // b=200;
  // setWidth():void{
  //   this.a = 100;
  //   this.b = 200;
  // }
  // Title = 'Choose T-shirt';
  // Height = 300;
  // Width = 300;
  // imgSource = '../assets/front.jpg';
  // ChangeTshirtMouseEnter():void{
  //   this.imgSource='../assets/back.jpg';
  // }
  // ChangeTshirtMouseExit():void{
  //   this.imgSource = '../assets/front.jpg'
  isbindingvisivle = true;
  issdvisible = false;
  showProductTable=false;
  showPurchase= false;
  showChild1 = false;
  showChild2  = false;
  
  showDemo():void{
    this.isbindingvisivle = true;
    this.issdvisible = false;   
    this.showProductTable=false;
    this.showPurchase = false;
    this.showChild1 = false;
    this.showChild2 = false;
  }
 
  showdirectiveDemoFunction(): void{
    this.isbindingvisivle= false;
    this.showProductTable=false;
    this.issdvisible = true;
    this.showPurchase = false;
    this.showChild1 = false;
    this.showChild2 = false;
  }
  showComponents(): void{
    this.showChild1 = true;
    this.showChild2 = true;
    this.isbindingvisivle= false;
    this.showProductTable=false;
    this.issdvisible = false;
    this.showPurchase = false;
  }
 
  showProductsTable(): void{
    this.isbindingvisivle = false;
    this.issdvisible = false;
    this.showProductTable = true;
    this.showPurchase = false;
    this.showChild1 = false;
    this.showChild2 = false;
  }
  MasterDetailsFunction(): void{
    this.isbindingvisivle= false;
    this.showProductTable=false;
    this.issdvisible = false;
    this.showPurchase = true;
    this.showChild1 = false;
    this.showChild2 = false;
  }
}

