import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
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
    this.isbn$ = this.route.paramMap
      .pipe(
        map(params => params.get('isbn'))
      );

    // --------
    // import { map } from 'rxjs/operators';
    // import { Observable, of, from } from 'rxjs';

    const observer = {
      next: zahl => console.log(zahl),
      error: e => console.log('ERROR', e),
      complete: () => console.log('Complete! 😀')
    };

    const observable$ = new Observable(subscriber => {
      subscriber.next(2);
      subscriber.next(4);
      subscriber.next(6);
      window.setTimeout(() => subscriber.next(99), 2000);
    });

    const subscription = observable$.subscribe(observer);
    window.setTimeout(() => subscription.unsubscribe(), 2000);
  }

}
