import {Component, Input} from '@angular/core';
import {Book} from "../../Model/Book";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

  @Input() book: Book;

  constructor() {
    this.book = new Book(0, '', '', '', '', '',[]);
  }
  ngOnInit(): void {
  }
  getButtonText(): string {
    return this.book.waitingList.length === 0 ? 'Reserve' : 'Join Waitlist';
  }


}
