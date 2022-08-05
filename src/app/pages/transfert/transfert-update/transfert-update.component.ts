import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransfertModel } from 'src/app/model/transfert.model';
import { TransfertService } from 'src/app/service/transfert/transfert.service';

@Component({
  selector: 'app-transfert-update',
  templateUrl: './transfert-update.component.html',
  styleUrls: ['./transfert-update.component.css']
})
export class TransfertUpdateComponent implements OnInit {
  public id!:number;
   curentTransfert!:TransfertModel;
   curentid!:number
  constructor(private service:TransfertService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = (this.activatedRoute.snapshot.params["id"]);
    console.log(this.id);
    this.service.findOne(this.id).subscribe(data => {
      this.curentTransfert=data;
      this.curentid = data.id
    },
      error=>console.log(error))

}

onUpdateTransfert(t:TransfertModel){
  t.id = this.curentid;

  this.service.update(t,this.id).subscribe(data => {
       this.route.navigateByUrl("transfert")
     },err=>alert("update impossible"));

}

}
