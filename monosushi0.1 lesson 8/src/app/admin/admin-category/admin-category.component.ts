import { Component } from '@angular/core';
import { ICategoryResponce } from 'src/app/shared/interface/common.interface';
import { CategoryService } from 'src/app/shared/services/category/category.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent {
  constructor(
    private categoryService: CategoryService
  ) { }
  ngOnInit(): void {
    this.getCategories()
  }

  public categories = this.categoryService.categories;

  public clickAddBtn: boolean = !false;
  public categoryId!:number;

  public categoryName!: string
  public categoryWay!: string
  public categoryFile!: string

  public isUpdatePressed: boolean = false;

  getCategories() {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data
    })
  }

  //створює нову знижку і надсилає її в db.json
  addCategory() {
    const newCategory = {
      name: this.categoryName,
      way: this.categoryWay,
      file: this.categoryFile
    }
    this.categoryService.create(newCategory).subscribe(() => {
      this.getCategories()
    })
    this.categoryName = '';
    this.categoryWay = '';
    this.categoryFile = '';
  }

  //видаляє конкретну знижку з db.json
  clickDeleteCurrentCategory(category: ICategoryResponce): void {
    if (confirm("are you sure")) {
      this.categoryService.delete(category.id).subscribe(() => {
        this.getCategories();
      })
    }
  }

  showAddMenu(): void {
    this.clickAddBtn === true ? this.clickAddBtn = false : this.clickAddBtn = true;

  }
  //при натисканні витягує з db.json конкретну знижку і заповнює поля її значеннями
  clickUpdateCurrentCategory(category: ICategoryResponce): void {
    this.categoryName = category.name;
    this.categoryWay = category.way;
    this.categoryFile = category.file;
    this.categoryId = category.id
    this.isUpdatePressed = true;
  }

  updateCategory() {
    const updateCategory = {
      name:this.categoryName,
      way:this.categoryWay,
      file:this.categoryFile
    }
    this.categoryService.update(updateCategory, this.categoryId).subscribe(() => {
      this.getCategories();
      this.categoryName = '';
      this.categoryWay = '';
      this.categoryFile = '';
      this.isUpdatePressed = false;
    })
  }

}
