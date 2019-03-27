import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // ACHTUNG: bei Http werden wir hier ein Problem bekommen
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private service: BookRatingService) {

  }

  ngOnInit() {

    this.books = [{
      isbn: '111',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5
    },
    {
      isbn: '222',
      title: 'AngularJs',
      description: 'End of Lifetime erreicht',
      rating: 3
    },
    {
      isbn: '333',
      title: 'React',
      description: '...',
      rating: 1
    }];
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
}
