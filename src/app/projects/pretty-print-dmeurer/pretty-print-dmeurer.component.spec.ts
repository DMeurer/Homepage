import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyPrintDmeurerComponent } from './pretty-print-dmeurer.component';

describe('PrettyPrintDmeurerComponent', () => {
  let component: PrettyPrintDmeurerComponent;
  let fixture: ComponentFixture<PrettyPrintDmeurerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrettyPrintDmeurerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrettyPrintDmeurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
