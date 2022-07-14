import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/model/product.model';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder,private service: ProductServiceService) { }

  ngOnInit(): void {
    this.product=this.formBuilder.group({
      name:['',Validators.required],
      desc:['',Validators.required],
      price:['',Validators.required]
  })
  }

  onSubmit(): void {




    // alert(JSON.stringify(this.product.value))
    this.service.save(this.product.value)
    .subscribe({
      next:(result) => {
        alert("product added")
      },
      error:(err) => {
        alert("erroe")
      }
    })
  }

}
