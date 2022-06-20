import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
//import { Interface } from 'readline';

export enum NoteTypes {
	Income = 1,
	Expense
}

export class Note {
	title: string = "Title";
	price: number = 100;
	noteType: NoteTypes = NoteTypes.Income;
	category: string;

	constructor(_title:string, _price:number, _noteType:NoteTypes, _category:string){
		this.title = _title;
		this.price = _price;
		this.noteType = _noteType;
		this.category = _category;
	}
}

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnChanges {

	@Input() category:string = '';

	public notes: Array<Note>;

	public income: NoteTypes = NoteTypes.Income;
	public expense: NoteTypes = NoteTypes.Expense;
	public currCategory: string = '';

	addNote(newNote:Note) : void{
		this.notes.push(newNote);
	}

	constructor() {
		this.notes = [
			{
				title: "Зарплата",
				price: 200,
				noteType: NoteTypes.Income,
				category: 'Здоровье'
			},
			{
				title: "Покушать",
				price: 300,
				noteType: NoteTypes.Expense,
				category: 'Здоровье'
			},
			{
				title: "Подарили",
				price: 2000,
				noteType: NoteTypes.Income,
				category: 'Здоровье'
			},
			{
				title: "Погулять",
				price: 1000,
				noteType: NoteTypes.Expense,
				category: 'Дорога'
			},
			{
				title: "Жёстко погулять",
				price: 5000,
				noteType: NoteTypes.Expense,
				category: 'Дорога'
			}
		]
	}

	ngOnInit(): void {
	}

	ngOnChanges(changes: SimpleChanges): void {
		for (let propName in changes) {  
			if(propName == 'category'){
				let change = changes[propName];
				this.currCategory = change.currentValue;
				
			}
		}
		this.notes = [...this.notes];
	}

}
