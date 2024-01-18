import { Component } from '@angular/core';
import {FirstService} from "../../Services/first.service";
import {Book} from "../../Model/Book";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  book: Book;
  constructor(
    private firstService: FirstService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.book = new Book(0, '', '', '', '', '',[]);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.book = this.firstService.getBookById(params['id']);
      }
    );
  }
}
