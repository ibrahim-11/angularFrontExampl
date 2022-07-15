import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppProductComponent } from './pages/app-product/app-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
// import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [

   {path: '' ,component: ViewProductComponent},
   {path: "add", component: AppProductComponent},
   {path: "edit/:id", component: EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
