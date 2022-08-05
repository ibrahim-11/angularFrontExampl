import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppProductComponent } from './pages/app-product/app-product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { TransfertViewComponent } from './pages/transfert/transfert-view/transfert-view.component';
import { TransfertEditComponent } from './pages/transfert/transfert-edit/transfert-edit.component';
import { TransfertUpdateComponent } from './pages/transfert/transfert-update/transfert-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AppProductComponent,
    ProductListComponent,
    ViewProductComponent,
    EditProductComponent,
    ProductDetailsComponent,
    TransfertViewComponent,
    TransfertEditComponent,
    TransfertUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
