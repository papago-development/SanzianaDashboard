import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeniuStandardComponent } from './meniu-standard.component';

describe('MeniuStandardComponent', () => {
  let component: MeniuStandardComponent;
  let fixture: ComponentFixture<MeniuStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeniuStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeniuStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
