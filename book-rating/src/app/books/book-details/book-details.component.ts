import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private store: BookStoreService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.book$ = this.route.paramMap
      .pipe(
        map(params => params.get('isbn')),
        switchMap(isbn => this.store.getSingle(isbn))
      );
  }
}
