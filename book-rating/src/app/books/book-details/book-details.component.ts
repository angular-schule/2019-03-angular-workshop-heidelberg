import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';
import { Book } from '../shared/book';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn$: Observable<string>;
  book$: Observable<Book>;

  constructor(private store: BookStoreService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('isbn')),
        map(isbn => this.store.getSingle(isbn))
      ).subscribe(books$ => {

        books$.subscribe((book) => {
          console.log(book);
        });
      });
  }
}
