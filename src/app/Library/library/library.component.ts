import { Component } from '@angular/core';
import {Book} from "../../Model/Book";
import {FirstService} from "../../Services/first.service";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  books: Book [];
  constructor(firstService: FirstService) {
    this.books = firstService.getBooks();
  }
  ngOnInit(): void {
    console.log('on init');
  }
}
