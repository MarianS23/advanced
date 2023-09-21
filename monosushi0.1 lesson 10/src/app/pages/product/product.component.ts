import { Component, OnInit,OnDestroy} from '@angular/core';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICategoryResponce, IProductResponce } from 'src/app/shared/interface/common.interface';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
  export class ProductComponent implements OnInit, OnDestroy {
private eventSubscription!:Subscription;

    constructor(
      private productService: ProductService,
      private activatedRoute:ActivatedRoute,
      private router:Router
    ) { 
      this.eventSubscription = this.router.events.subscribe(event=>{
        if(event instanceof NavigationEnd){
          this.getProducts();
        }
      })
    }
    ngOnInit(): void {}
    ngOnDestroy(): void {
      this.eventSubscription.unsubscribe()
    }
    public products = this.productService.products;
    public currentName!:string;
    
    
    getProducts() {
      const currentCategory = this.activatedRoute.snapshot.paramMap.get('category') as string
      return this.productService.getAllByCategory(currentCategory).subscribe(data => {
        this.products = data;
        this.currentName = this.products[0].category.name
      })
    }
    productCount(product:IProductResponce, value:boolean){
      console.log(product)
      if(value){
        ++product.count;
      }else if(!value && product.count>1){
        --product.count;
      }
    }
    
  }
