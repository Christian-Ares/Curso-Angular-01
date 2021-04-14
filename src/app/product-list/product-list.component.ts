import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 public products = [
  {
   id:1,
   name:'egg',
   category:'Food',
   description: 'Lorem Egg',
   price: 1
  }
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
