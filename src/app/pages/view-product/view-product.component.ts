import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/product.model';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products!: ProductModel[] ;
  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
    this.service.findAll()
    .subscribe(data => {this.products = data},
      err => console.log(err))
  }

  onDelete(produit:ProductModel){
    this.service.delete(produit).subscribe(data=>{
      alert(JSON.stringify(data))
    },err => console.log(err))

  }

}
