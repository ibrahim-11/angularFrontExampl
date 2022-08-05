import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransfertModel } from 'src/app/model/transfert.model';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {

  constructor(private http :HttpClient) { }


  findAll():Observable<TransfertModel[]>{

    return this.http.get<TransfertModel[]>("http://localhost:8080/transfert")
  }
  findOne(id :number):Observable<TransfertModel>{

    return this.http.get<TransfertModel>("http://localhost:8080/transfert/"+id)
  }
  public save(transfert: TransfertModel):Observable<TransfertModel>{

    return this.http.post<TransfertModel>("http://localhost:8080/transfert",transfert);
  }
  public delete(transfert: TransfertModel):Observable<TransfertModel>{

    return this.http.delete<TransfertModel>("http://localhost:8080/transfert"+"/"+transfert.id);
  }
  public update(transfert: TransfertModel,id:number):Observable<TransfertModel>{

    return this.http.post<TransfertModel>("http://localhost:8080/transfert/"+id,transfert);
  }

  // public save(utilisateur:Utilisateur){
  //   return this.http.post<Utilisateur>(url,utilisateur)

  // }
}
