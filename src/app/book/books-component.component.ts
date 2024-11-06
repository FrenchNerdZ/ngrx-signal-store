import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Injector,
  OnInit,
} from '@angular/core';
import { BooksStore } from './books.store';
import { JsonPipe } from '@angular/common';
import { Book } from './book.model';
import { patchState } from '@ngrx/signals';
import { BookListComponent } from './book-list/book-list.component';
import { BookFilterComponent } from './book-filter/book-filter.component';

@Component({
  selector: 'app-books-component',
  standalone: true,
  imports: [JsonPipe, BookListComponent, BookFilterComponent],
  providers: [BooksStore],
  templateUrl: './books-component.component.html',
  styleUrl: './books-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponentComponent implements OnInit {
  protected readonly store = inject(BooksStore);
  protected readonly injector = inject(Injector);

  ngOnInit(): void {
    this.store.loadByQuery(this.store.filter.query);
  }
}
