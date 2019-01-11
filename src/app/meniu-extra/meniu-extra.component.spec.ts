import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeniuExtraComponent } from './meniu-extra.component';

describe('MeniuExtraComponent', () => {
  let component: MeniuExtraComponent;
  let fixture: ComponentFixture<MeniuExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeniuExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeniuExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
