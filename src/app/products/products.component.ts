import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 public users = [
  {name: 'Christian', city: 'Madrid'},
  {name: 'Ana', city:''},
  {name:'Mushu', city:'Valencia'}
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
