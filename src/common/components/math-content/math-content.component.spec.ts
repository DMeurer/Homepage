import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathContentComponent } from './math-content.component';

describe('MathContentComponent', () => {
  let component: MathContentComponent;
  let fixture: ComponentFixture<MathContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
