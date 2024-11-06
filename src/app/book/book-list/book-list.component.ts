import { Component, input, InputSignal, Signal } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  public books$: InputSignal<Book[]> = input.required<Book[]>({
    alias: 'books',
  });
  public isLoading$: InputSignal<boolean> = input<boolean>(false, {
    alias: 'isLoading',
  });
}
