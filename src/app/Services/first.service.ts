import { Injectable } from '@angular/core';
import {Book} from "../Model/Book";

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  books: Book[];
  constructor() {
    this.books = [
      new Book(1, "Learn Angular", 'Angular', "web dev", "frontend", 'https://angular.io/assets/images/logos/angular/angular.svg',[]),
      new Book(2, 'Learn React', 'React', "web dev", "frontend",'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',[]),
      new Book(3, 'Learn Vue', 'Vue', "web dev", "frontend",'https://vuejs.org/images/logo.png',[]),
      new Book(4, 'Learn Node', 'Node', "web dev", "backend",'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',[]),
      new Book(5, 'Learn Express', 'Express', "web dev", "backend",'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',[]),
      new Book(6, 'Learn MongoDB', 'MongoDB', "web dev", "backend",'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png',[]),
      new Book(7, 'The stranger', 'Albert Camus', "roman", "littérature",'https://m.media-amazon.com/images/I/81GjCVSEDAL._AC_UF1000,1000_QL80_.jpg',[]),
      new Book(8, 'The myth of Sisyphus', 'Albert Camus', "essai", "philosophie",'https://target.scene7.com/is/image/Target/GUEST_2f17592a-7523-400a-8dd4-392cf348f148?wid=488&hei=488&fmt=pjpeg',[]),
      new Book(9, 'The plague', 'Albert Camus', "roman", "littérature",'https://cdn.kobo.com/book-images/218d5f86-1f3a-480d-88ad-d20472128d85/1200/1200/False/the-plague-10.jpg',[]),
      new Book(10, 'The fall', 'Albert Camus', "roman", "littérature","assets/the_fall.jpg",[1]),

    ]
  }
  getBooks(): Book[]{
    return this.books;
  }
  getBookById(id: number): Book {
    const book = this.books.find( book => book.id == id);
    return book ? book : new Book(0, '', '', '', '', '',[]);
  }

  addToWaitingList(bookId: number, userId: number): void {
    // find the book
    const book = this.books.find(b => b.id === bookId);
    if (book) {
      // add the user to the waitingList
      book.waitingList.push(userId);
    }
  }
}
