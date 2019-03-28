import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // ACHTUNG: bei Http werden wir hier ein Problem bekommen
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private service: BookRatingService, private store: BookStoreService) {

    /*
    "Hausaufgabe":
    Erweitere das Buch-Interface im ein Thumbnail
    1. informiere dich über die Verfügbaren Properties mithilfe von Swagger UI
    2. erweitere das Interface Book
    3. zeige das Thumbnail anstelle der Katzen an!
    */

  }

  ngOnInit() {
    this.store.getAll().subscribe((books) => {
      this.books = books;
    });
  }

  doRateDown(book: Book) {
    const ratedBook = this.service.rateDown(book);
    this.updateAndSortList(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.service.rateUp(book);
    this.updateAndSortList(ratedBook);
  }

  updateAndSortList(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }

  addBook(newBook: Book) {
    this.books = [...this.books, newBook];
  }
}
