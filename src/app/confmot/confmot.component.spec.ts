import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfmotComponent } from './confmot.component';

describe('ConfmotComponent', () => {
  let component: ConfmotComponent;
  let fixture: ComponentFixture<ConfmotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfmotComponent]
    });
    fixture = TestBed.createComponent(ConfmotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
