import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransfertService } from 'src/app/service/transfert/transfert.service';

@Component({
  selector: 'app-transfert-edit',
  templateUrl: './transfert-edit.component.html',
  styleUrls: ['./transfert-edit.component.css']
})
export class TransfertEditComponent implements OnInit {

  constructor(private service:TransfertService,private route:Router) { }

  ngOnInit(): void {
  }

  onSaveTransfert(data: any){
    // console.log(data)
    this.service.save(data).subscribe(res=>{
      this.route.navigateByUrl("transfert");
  
     },error=>{alert("impossible d'enregistrer le transfert")})
  
  }
  

}
