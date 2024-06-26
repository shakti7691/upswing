import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  
  id:any;
  setData(data: number){
    this.id = data
  }
  getData(){
   return this.id
  }

  getList(){
    return this.http.get(`http://localhost:3000/product`)
  }
  addproduct(data:any){
    return this.http.post(`http://localhost:3000/product`, data)
  }
  updateproduct(data:any, id:any){
    return this.http.put(`http://localhost:3000/product/${id}`, data)
  }
  deleteProduct(id:any){
    return this.http.delete(`http://localhost:3000/product/${id}`)
  }
  getById(id:number){
    return this.http.get(`http://localhost:3000/product/${id}`)
  }
}
