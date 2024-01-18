import {Component, Input} from '@angular/core';
import {Book} from "../../Model/Book";

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrl: './discussion.component.css'
})
export class DiscussionComponent {

  @Input() book: Book;
  constructor() {
    this.book = new Book(0, '', '', '', '', '',[]);
  }
}
