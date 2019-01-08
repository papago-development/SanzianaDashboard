import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelCreateComponent } from './fel-create.component';

describe('FelCreateComponent', () => {
  let component: FelCreateComponent;
  let fixture: ComponentFixture<FelCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
