import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let rateUpWasCalled = false;
  beforeEach(async(() => {

    const bookRatingMock = {
      rateUp: (book) => { rateUpWasCalled = true; return book; },
      rateDown: () => { }
    };

    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        BookComponent // Integration Test
      ],
      providers: [
        {
          provide: BookRatingService,
          useValue: bookRatingMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doRateUp() should forward the execution to BookRatingService', () => {

    const newBook = {
      isbn: '000',
      title: '',
      description: '',
      rating: 1
    };

    component.doRateUp(newBook);
    expect(rateUpWasCalled).toBe(true);

  });
});
