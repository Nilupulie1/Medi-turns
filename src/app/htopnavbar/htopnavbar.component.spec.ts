import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtopnavbarComponent } from './htopnavbar.component';

describe('HtopnavbarComponent', () => {
  let component: HtopnavbarComponent;
  let fixture: ComponentFixture<HtopnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtopnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtopnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
