import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, share, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Book } from '../shared/book';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private store: BookStoreService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.book$ = this.route.paramMap
      .pipe(
        map(params => params.get('isbn')),
        switchMap(isbn => this.store.getSingle(isbn)
          .pipe(catchError((e: HttpErrorResponse) => of({
            isbn: '???',
            title: e.url,
            description: 'Sorry, das gab es einen Fehler',
            rating: 1
          }
          ))),
        )
      );
  }
}
