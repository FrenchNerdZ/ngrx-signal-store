import { Injectable, signal, WritableSignal } from '@angular/core';
import { Book } from './book.model';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: WritableSignal<Book[]> = signal([]);

  constructor() {
    this.books.set([
      {
        title: 'Le Seigneur des Anneaux',
      },
      {
        title: 'Game of Thrones',
      },
      {
        title: 'Harry Potter',
      },
      {
        title: 'Metro',
      },
      {
        title: 'Le monde de Narnia',
      },
      {
        title: 'Les mondes parallèles',
      },
      {
        title: 'Les chroniques de la Lune Noire',
      },
      {
        title: 'Le Silmarillion',
      },
      {
        title: "L'odyssée des étoiles",
      },
      {
        title: 'Valerian',
      },
      {
        title: 'A Marvellous Light',
      },
    ]);
  }
  public getAll = () => this.books();
  public getByQuery = (query: string) =>
    of(this.books().filter((book: Book) => book.title.includes(query))).pipe(
      delay(500)
    );
}
