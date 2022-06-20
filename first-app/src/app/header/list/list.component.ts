import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

enum Category {
	Income = 1,
	Expense
}

interface Note {
	title: string;
	price: number;
	idCategory: Category;
}

export class ListComponent implements OnInit {

  @Input() notes: Array<Note>;

  constructor() { }

  ngOnInit(): void {
  }

}
