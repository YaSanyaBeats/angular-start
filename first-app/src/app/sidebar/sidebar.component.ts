import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export class Category{
  title:string = '';
  color:string = '#FFFFFF';
  isActive:boolean = false;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() activeCategory = new EventEmitter();

  public categories:Array<Category> = [
    {title: 'Здоровье', color: 'red', isActive: true},
    {title: 'Еда', color: 'orange', isActive: false},
    {title: 'Путешествия', color: 'yellow', isActive: false},
    {title: 'Дорога', color: 'green', isActive: false},
    {title: 'Категория', color: 'blue', isActive: false},
    {title: 'Ещё одна', color: 'purple', isActive: false}
  ];

  public setActive(category:Category){
    this.categories.forEach((elem) => {
      if(elem.title == category.title){
        elem.isActive = true;
      }
      else{
        elem.isActive = false;
      }
    })
    this.activeCategory.emit(category);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
