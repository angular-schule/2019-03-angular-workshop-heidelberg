import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;

  constructor(private store: BookStoreService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.isbn = this.route.snapshot.paramMap.get('isbn');

    // this.route.paramMap.subscribe((params) => {
    //   this.isbn = params.get('isbn');
    // });
  }

}
