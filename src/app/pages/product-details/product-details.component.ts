import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/model/product.model';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id!: number;
  product!:ProductModel;


 constructor(private service: ProductServiceService,private route:Router,private activatedRoute:ActivatedRoute) { }

 ngOnInit(): void {
     this.id = (this.activatedRoute.snapshot.params["id"]);
     console.log(this.id);
     this.service.findOne(this.id).subscribe(data => {
       this.product=data;
  
     },
       error=>console.log(error))

 }
}
