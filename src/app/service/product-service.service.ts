import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})


export class ProductServiceService {


  constructor(private http :HttpClient) { }


  findAll():Observable<ProductModel[]>{

    return this.http.get<ProductModel[]>("http://localhost:8080/products")
  }
  findOne(id :number):Observable<ProductModel>{

    return this.http.get<ProductModel>("http://localhost:8080/products/"+id)
  }
  public save(product: ProductModel):Observable<ProductModel>{

    return this.http.post<ProductModel>("http://localhost:8080/products",product);
  }
  public delete(product: ProductModel):Observable<ProductModel>{

    return this.http.delete<ProductModel>("http://localhost:8080/products"+"/"+product.id);
  }
  public update(product: ProductModel,id:number):Observable<ProductModel>{

    return this.http.post<ProductModel>("http://localhost:8080/products/"+id,product);
  }

  // public save(utilisateur:Utilisateur){
  //   return this.http.post<Utilisateur>(url,utilisateur)

  // }
}
