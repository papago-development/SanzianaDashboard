import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeniuLaAlegereComponent } from './meniu-la-alegere.component';

describe('MeniuLaAlegereComponent', () => {
  let component: MeniuLaAlegereComponent;
  let fixture: ComponentFixture<MeniuLaAlegereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeniuLaAlegereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeniuLaAlegereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
