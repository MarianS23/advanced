import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductComponent } from './pages/product/product.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { DeliveryAndPaymentComponent } from './pages/delivery-and-payment/delivery-and-payment.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalBasketComponent } from './components/modal-basket/modal-basket.component';
import { ModalSigninComponent } from './components/modal-signin/modal-signin.component';

import { AdminComponent } from './admin/admin.component';
import { AdminDiscountComponent } from './admin/admin-discount/admin-discount.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminDeliveryComponent } from './admin/admin-delivery/admin-delivery.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'authorization',component:AuthorizationComponent},
  {path:'cabinet',component:CabinetComponent},
  {path:'delivery',component:DeliveryAndPaymentComponent},
  {path:'discount',component:DiscountComponent},
  {path:'product/:category',component:ProductComponent},
  {path:'basket',component:ModalBasketComponent},
  {path:'signin',component:ModalSigninComponent},
  {path:'admin',component:AdminComponent, children:[
    {path:'admin-category',component:AdminCategoryComponent},
    {path:'admin-discount',component:AdminDiscountComponent},
    {path:'admin-delivery',component:AdminDeliveryComponent},
    {path:'admin-product',component:AdminProductComponent},
    { path: '', pathMatch: 'full', redirectTo: 'admin-category' }
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
