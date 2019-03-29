import * as fromBook from '../reducers/book.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

/* STATE:
{
  books: {
    books: [],
    loading: false
  }
}
*/

export const getBookState = createFeatureSelector<fromBook.State>('book'); // lazy loading compatibel

export const getBooksLoading = createSelector(
  getBookState,
  bookState => bookState.loading
);

export const getAllBooks = createSelector(
  getBookState,
  bookState => bookState.books
);


