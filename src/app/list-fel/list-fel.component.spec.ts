import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFelComponent } from './list-fel.component';

describe('ListFelComponent', () => {
  let component: ListFelComponent;
  let fixture: ComponentFixture<ListFelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
