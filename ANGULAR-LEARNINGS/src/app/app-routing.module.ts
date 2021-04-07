import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { generate } from 'rxjs';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { GenerateerrorComponent } from './generateerror/generateerror.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';
const Routes: Routes = [
    //{ path: 'home', component: AppComponent },
    {path:'home', component: HomeComponent},
    { path: 'products', component: ProductComponent },
    { path: 'data-binding', component: TshirtdatabindingComponent },
    { path: 'Master-Details', component: PurchaseComponent },
    {path: 'Gen-Error', component:GenerateerrorComponent},
    { path: 'Share-Data', component: Child1Component },
    {path: 'custom-attribute', component: HelloComponent},
    {path: 'Login', component:LoginComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}
];
@NgModule({
    imports: [RouterModule.forRoot(Routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
