import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppProductComponent } from './pages/app-product/app-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { TransfertEditComponent } from './pages/transfert/transfert-edit/transfert-edit.component';
import { TransfertUpdateComponent } from './pages/transfert/transfert-update/transfert-update.component';
import { TransfertViewComponent } from './pages/transfert/transfert-view/transfert-view.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
// import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [

   {path: '' ,component: ViewProductComponent},
   {path: "add", component: AppProductComponent},
   {path: "edit/:id", component: EditProductComponent},
   {path: "detail/:id", component: ProductDetailsComponent},
   {path: "transfert", component: TransfertViewComponent},
   {path: "addTransfert", component: TransfertEditComponent},
   {path: "updateTransfert/:id", component: TransfertUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
