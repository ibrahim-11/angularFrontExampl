import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/model/product.model';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  products!: ProductModel[] ;
  constructor(private service: ProductServiceService,private route:Router) { }

  ngOnInit(): void {
    this.service.findAll()
    .subscribe(data => {this.products = data},
      err => {
        console.log(err);
      })
  }


  onDelete(produit:ProductModel){
   
    this.service.delete(produit).subscribe(data=>{
      this.products = this.products.filter((item => item.id !==produit.id));
  // this.route.navigateByUrl("/")
    },err => console.log(err))

  }

  onEditProduct(p :ProductModel){
   
   
    this.route.navigateByUrl("edit/"+(p.id))
  }
  detail(p :ProductModel){
   
   
    this.route.navigateByUrl("detail/"+(p.id))
  }

}
