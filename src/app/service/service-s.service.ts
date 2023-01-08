import { Injectable } from '@angular/core';
import { Product } from './../model/product';
 import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServiceSService {
finall():Product[]{
  return[
    {id:1,title:"t shirt",price:1,quantity:2,like:0},
    {id:2,title:"t-shirt",price:11,quantity:12,like:0},
    {id:3,title:"t-shirt",price:1,quantity:2,like:0},
    {id:4,title:"t-shirt",price:1,quantity:22,like:0},
    {id:5,title:"t-shirt",price:10,quantity:12,like:0}
  ];
}
  url="http://localhost:3000/"
  constructor(private http:HttpClient) { }
   getProduct():Observable<any>{
    return this.http.get(this.url+"products")
  }

  addPerson(p:Product):Observable<any> {
    return this.http.post<any>(this.url+"products",p)
    }
   

    delete(id:number):Observable<any>{
      return this.http.delete(this.url+"products/"+id)
    }
    update(id:number,p:Product):Observable<any>{
      return this.http.patch(this.url+"products/"+id,p)

    }

}
