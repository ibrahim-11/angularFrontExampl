import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private productList!:any[];

  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {

    this.service.findAll()
    .subscribe(data=>this.productList = data);

    
    // .subscribe((data)=>this.productList = data);
  }


  showData(){
    alert(JSON.stringify(this.productList));
  }
}
