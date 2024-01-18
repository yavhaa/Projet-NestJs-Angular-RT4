import {Component, Input} from '@angular/core';
import {Book} from "../../Model/Book";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  @Input() book: Book;
  constructor() {
    this.book = new Book(0, '', '', '', '', '',[]);
  }
}
