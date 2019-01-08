import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeniuStandardEditComponent } from './meniu-standard-edit.component';

describe('MeniuStandardEditComponent', () => {
  let component: MeniuStandardEditComponent;
  let fixture: ComponentFixture<MeniuStandardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeniuStandardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeniuStandardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
