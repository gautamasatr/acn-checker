import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcnCheckerComponent } from './acn-checker.component';

describe('AcnCheckerComponent', () => {
  let component: AcnCheckerComponent;
  let fixture: ComponentFixture<AcnCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcnCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcnCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
