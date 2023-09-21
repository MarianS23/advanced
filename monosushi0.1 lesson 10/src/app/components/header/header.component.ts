import { Component, OnInit,HostListener } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { IProductResponce } from 'src/app/shared/interface/common.interface';
import { OrderService } from 'src/app/shared/services/order/order.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private basket: Array<IProductResponce> = [];
  public clickBasket: boolean = false;
  public totalPrice = 0;
  public totalCount = 0;



  constructor(
    private orderService: OrderService
  ) { }
  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();
  }

  loadBasket() {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.basket = JSON.parse(localStorage.getItem('basket') as string);
    }
    this.getTotalPrice();
    this.getTotalCount();
  }
  getTotalPrice(): void {
    this.totalPrice = this.basket
      .reduce((total: number, prod: IProductResponce) => total + prod.count * prod.price, 0)
  }
  getTotalCount(): void {
    this.totalCount = this.basket
      .reduce((total: number, prod: IProductResponce) => total + prod.count, 0)
  }
  updateBasket(): void {
    this.orderService.changeBasket.subscribe(() => {
      this.loadBasket();
    })
  }

  // @HostListener('click',['$event.target.className'])

  toggleBusket() {
    if (this.clickBasket) {
      this.clickBasket = false;
      document.body.style.overflow = "auto";
    } else {
      this.clickBasket = true;
      document.body.style.overflow = "hidden";

    }
  }
}

