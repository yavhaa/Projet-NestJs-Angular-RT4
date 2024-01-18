import {Component, Input} from '@angular/core';
import {Book} from "../../Model/Book";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() book: Book;
  constructor(private route: Router) {
    this.book = new Book(0, '', '', '', '', '',[]);
  }

  ngOnInit(): void {
  }

  Details(book: Book) {
    console.log('on a recu le livre', book);
    const link = ['details', book.id];
    this.route.navigate(link);

  }
}
