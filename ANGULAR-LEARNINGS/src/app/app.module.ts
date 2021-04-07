import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';
import { HelloComponent } from './hello/hello.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule} from '@angular/material/expansion';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ChangecolorDirective } from './changecolor.directive';
import { AppRoutingModule } from './app-routing.module';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { HomeComponent } from './home/home.component';
import { GenerateerrorComponent } from './generateerror/generateerror.component';
import { MyerrorhandelerService } from './myerrorhandeler.service';
import { LoginComponent } from './login/login.component';
import { CustompipePipe } from './custompipe.pipe';
import { ProductsearchPipe } from './productsearch.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TshirtdatabindingComponent,
    HelloComponent,
    ProductComponent,
    PurchaseComponent,
    PurchaseorderComponent,
    Child1Component,
    Child2Component,
    ChangecolorDirective,
    AttributeDirectiveComponent,
    HomeComponent,
    GenerateerrorComponent,
    LoginComponent,
    CustompipePipe,
    ProductsearchPipe,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  providers: [{provide:ErrorHandler,useClass:MyerrorhandelerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
