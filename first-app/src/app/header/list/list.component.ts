import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {Note, NoteTypes} from '../header.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit, OnChanges {

  @Input() title: string = '';
  @Input() noteType: NoteTypes = NoteTypes.Income;
  @Input() notes: Array<Note> = [];
  @Input() category: string = 'Здоровье';

  @Output() newNote = new EventEmitter();

  addNewNote(title:string, price:string, noteType:NoteTypes){
    let note:Note = new Note(title, Number(price), noteType, 'Здоровье');
    this.newNote.emit(note);
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {  
      if(propName == 'category'){
        let change = changes[propName];
        this.category = change.currentValue;
        
      }
			
		}
    
  }

}
