import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {
 public product = {
   id:1,
   name:'egg',
   category:'Food',
   description: 'Lorem Egg',
   price: 1
  }
 

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   const productId = this.route.snapshot.paramMap.get('id');
   console.log('ProductId', productId);
  }
}
