import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Author2Component } from './authorDetail.component';

describe('Author2Component', () => {
  let component: Author2Component;
  let fixture: ComponentFixture<Author2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Author2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Author2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
