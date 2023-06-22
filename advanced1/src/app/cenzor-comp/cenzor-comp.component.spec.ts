import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenzorCompComponent } from './cenzor-comp.component';

describe('CenzorCompComponent', () => {
  let component: CenzorCompComponent;
  let fixture: ComponentFixture<CenzorCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenzorCompComponent]
    });
    fixture = TestBed.createComponent(CenzorCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
