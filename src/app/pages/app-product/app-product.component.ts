import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.css']
})
export class AppProductComponent implements OnInit {



  constructor(private service:ProductServiceService,private route:Router) { }

  ngOnInit(): void {


}

onSaveProduct(data: any){
  // console.log(data)
  this.service.save(data).subscribe(res=>{
    this.route.navigateByUrl("");

   },error=>{alert("impossible d'enregistrer")})

}




}
