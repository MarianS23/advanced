import { Component, OnInit } from '@angular/core';
import { IProductResponce } from 'src/app/shared/interface/common.interface';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  public product!:IProductResponce;
  public products:Array<IProductResponce> = [];
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getRolls();
  }
  
  getRolls(){
    return this.productService.getAllByCategory('roll').subscribe(data => {
      this.products = data;
    })
  }

  productCount(product:IProductResponce, value:boolean){
    if(value){
      ++product.count;
    }else if(!value && product.count>1){
      --product.count;
    }
  }
}
