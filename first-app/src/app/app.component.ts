import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public category = '';
  public changeHeader(str:string){
    this.category = str;
  }

  title = 'first-app';
}
