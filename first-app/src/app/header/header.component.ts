import { Component, OnInit } from '@angular/core';
//import { Interface } from 'readline';

enum Category {
	Income = 1,
	Expense
}

interface Note {
	title: string;
	price: number;
	idCategory: Category;
}

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

	constructor() {
		
	}

	public notes: Array<Note> = [
		{
			title: "Зарплата",
			price: 200,
			idCategory: Category.Income
		},
		{
			title: "Покушать",
			price: 300,
			idCategory: Category.Expense
		},
		{
			title: "Подарили",
			price: 2000,
			idCategory: Category.Income
		},
		{
			title: "Погулять",
			price: 1000,
			idCategory: Category.Expense
		},
		{
			title: "Жёстко погулять",
			price: 5000,
			idCategory: Category.Expense
		}
	]

	ngOnInit(): void {
	}

}
