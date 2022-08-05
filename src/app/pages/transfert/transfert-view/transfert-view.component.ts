import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransfertModel } from 'src/app/model/transfert.model';
import { TransfertService } from 'src/app/service/transfert/transfert.service';

@Component({
  selector: 'app-transfert-view',
  templateUrl: './transfert-view.component.html',
  styleUrls: ['./transfert-view.component.css']
})
export class TransfertViewComponent implements OnInit {
  transferts!: TransfertModel[] ;
  constructor(private service: TransfertService,private route:Router) { }

  ngOnInit(): void {
    this.service.findAll()
    .subscribe(data => {this.transferts = data},
      err => {
        console.log(err);
      })
  }
  
  onDelete(produit:TransfertModel){
   
    this.service.delete(produit).subscribe(data=>{
      this.transferts = this.transferts.filter((item => item.id !==produit.id));
  // this.route.navigateByUrl("/")
    },err => console.log(err))

  }
  onEditProduct(t :TransfertModel){
   
   
    this.route.navigateByUrl("updateTransfert/"+(t.id))
  }

  detail(t :TransfertModel){
   
   
    this.route.navigateByUrl("detail/"+(t.id))
  }

}
