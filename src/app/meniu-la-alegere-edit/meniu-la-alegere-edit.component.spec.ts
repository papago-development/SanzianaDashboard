import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeniuLaAlegereEditComponent } from './meniu-la-alegere-edit.component';

describe('MeniuLaAlegereEditComponent', () => {
  let component: MeniuLaAlegereEditComponent;
  let fixture: ComponentFixture<MeniuLaAlegereEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeniuLaAlegereEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeniuLaAlegereEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
