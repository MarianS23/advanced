import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit{
  constructor(
    private productService:ProductService
  ){}
  ngOnInit(): void {
    this.getProducts()
  }
  public products = this.productService.products;
  
  
  getProducts(){
    return this.productService.getAll().subscribe(data=>{
      this.products = data;
    })
  }
}
