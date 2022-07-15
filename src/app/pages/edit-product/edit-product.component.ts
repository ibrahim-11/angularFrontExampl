import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/model/product.model';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
   public id!:number;
   curentproduct!:ProductModel;
   curentid!:number
 
  constructor(private service: ProductServiceService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
      this.id = (this.activatedRoute.snapshot.params["id"]);
      console.log(this.id);
      this.service.findOne(this.id).subscribe(data => {
        this.curentproduct=data;
        this.curentid = data.id
      },
        error=>console.log(error))

  }

  // onUpdateProduct(p:ProductModel){
  //  this.service.update(p,this.id).subscribe(data => {
  //   this.route.navigateByUrl("")
  //  },err=>alert("update impossible"));

  // }
  onUpdateProduct(p:ProductModel){
    p.id = this.curentid;

    this.service.update(p,this.id).subscribe(data => {
         this.route.navigateByUrl("")
       },err=>alert("update impossible"));

  }

}


