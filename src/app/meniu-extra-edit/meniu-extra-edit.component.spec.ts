import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeniuExtraEditComponent } from './meniu-extra-edit.component';

describe('MeniuExtraEditComponent', () => {
  let component: MeniuExtraEditComponent;
  let fixture: ComponentFixture<MeniuExtraEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeniuExtraEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeniuExtraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
