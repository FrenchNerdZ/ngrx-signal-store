import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksComponentComponent } from './book/books-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooksComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NGrxSignalStore';
}
