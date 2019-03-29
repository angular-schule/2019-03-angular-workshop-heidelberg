import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { State } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { LoadBooks } from '../actions/book.actions';
import { getBooksLoading, getAllBooks } from '../selectors/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // ACHTUNG: bei Http werden wir hier ein Problem bekommen
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  loading$ = this.ngrxStore.pipe(select(getBooksLoading));
  books$ = this.ngrxStore.pipe(select(getAllBooks));

  constructor(private ngrxStore: Store<State>) {
  }

  ngOnInit() {
    this.ngrxStore.dispatch(new LoadBooks());
  }

  doRateDown(book: Book) {
    // const ratedBook = this.service.rateDown(book);
    // this.updateAndSortList(ratedBook);
  }

  doRateUp(book: Book) {
    // const ratedBook = this.service.rateUp(book);
    // this.updateAndSortList(ratedBook);
  }

  updateAndSortList(ratedBook: Book) {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating);
  }

  addBook(newBook: Book) {
    // this.books = [...this.books, newBook];
  }
}
