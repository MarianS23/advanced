import { Component } from '@angular/core';
import { IDiscountResponce } from 'src/app/shared/interface/common.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-admin-discount',
  templateUrl: './admin-discount.component.html',
  styleUrls: ['./admin-discount.component.scss']
})
export class AdminDiscountComponent {
  constructor(
    private dataService: DataService
  ) { }
  ngOnInit(): void {
    this.getDiscount();
  }
  public clickAddBtn: boolean = !false;
  public discounts = this.dataService.discounts;

  public discountName!: string;
  public discountTitle!: string;
  public discountDescription!: string;
  public discountFile!: string;

  public discountId!: number;
  public isUpdatePressed: boolean = false;


  //отримує масив знижок з db.json
  getDiscount() {
    this.dataService.getAll().subscribe(data => {
      this.discounts = data;

    })
  }
  //створює нову знижку і надсилає її в db.json
  addDiscount() {
    const newDiscount = {
      date: this.getCurrentDate(),
      name: this.discountName,
      title: this.discountTitle,
      description: this.discountDescription,
      image: this.discountFile,
    }
    this.dataService.create(newDiscount).subscribe(() => {
      this.getDiscount()
    })
    this.discountName = '';
    this.discountTitle = '';
    this.discountDescription = '';
    this.discountFile = '';
  }

  //видаляє конкретну знижку з db.json
  clickDeleteCurrentDiscount(discount: IDiscountResponce): void {
    if (confirm("are you sure")) {
      this.dataService.delete(discount.id).subscribe(() => {
        this.getDiscount();
      })
    }
  }
  //при натисканні витягує з db.json конкретну знижку і заповнює поля її значеннями
  clickUpdateCurrentDiscount(discount: IDiscountResponce): void {
    this.discountName = discount.name;
    this.discountTitle = discount.title;
    this.discountDescription = discount.description;
    this.discountFile = discount.image;
    this.discountId = discount.id
    this.isUpdatePressed = true;
  }

  updateDiscount() {
    const updateDiscount = {
      date: this.getCurrentDate(),
      name: this.discountName,
      title: this.discountTitle,
      description: this.discountDescription,
      image: this.discountFile,
    }
    this.dataService.update(updateDiscount, this.discountId).subscribe(() => {
      this.getDiscount();
      this.discountName = '';
      this.discountTitle = '';
      this.discountDescription = '';
      this.discountFile = '';
      this.isUpdatePressed = false;
    })
  }

  showAddMenu(): void {
    this.clickAddBtn === true ? this.clickAddBtn = false : this.clickAddBtn = true;

  }
  getCurrentDate(): string {
    const date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let currentDate = [hours, ':', minutes, ', ', day, '.', month, '.', year];
    return currentDate.join('');
  }


}
