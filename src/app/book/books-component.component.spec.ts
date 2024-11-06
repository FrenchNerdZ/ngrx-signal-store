import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponentComponent } from './books-component.component';

describe('BooksComponentComponent', () => {
  let component: BooksComponentComponent;
  let fixture: ComponentFixture<BooksComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
