import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private products = [
  {
   id:1,
   name:'egg',
   category:'Food',
   description: 'Lorem Egg',
   price: 1
  },
  {
   id:2,
   name:'Coca Cola',
   category:'Drink',
   description: 'Lorem Drink',
   price: 1
  }
 ];


 getAllProducts(){
  return this.products;
 }

 getProductsById(id){
  return this.products.filter((product) => product.id == id);
 }
}
