import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';

@Component({
  selector: 'app-book-filter',
  standalone: true,
  imports: [],
  templateUrl: './book-filter.component.html',
  styleUrl: './book-filter.component.scss',
})
export class BookFilterComponent {
  inputChange(event: Event) {
    this.queryChange.emit((event.target as HTMLInputElement).value);
  }
  public query$: InputSignal<string> = input.required<string>({
    alias: 'query',
  });
  public order$: InputSignal<'asc' | 'desc'> = input.required<'asc' | 'desc'>({
    alias: 'order',
  });

  public queryChange: OutputEmitterRef<string> = output<string>();

  public orderChange: OutputEmitterRef<'asc' | 'desc'> = output<
    'asc' | 'desc'
  >();
}
