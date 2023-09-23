import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgaChipsComponent } from './nga-chips.component';

describe('NgaChipsComponent', () => {
  let component: NgaChipsComponent;
  let fixture: ComponentFixture<NgaChipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgaChipsComponent]
    });
    fixture = TestBed.createComponent(NgaChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
