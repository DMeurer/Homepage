import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChanges } from '@angular/core';

import { MathContentComponent } from './math-content.component';
import { MathJaxService } from '../../../app/services/mathjax.service';

describe('MathContentComponent', () => {
  let component: MathContentComponent;
  let fixture: ComponentFixture<MathContentComponent>;
  let mockMathJaxService: jasmine.SpyObj<MathJaxService>;

  beforeEach(async () => {
    mockMathJaxService = jasmine.createSpyObj('MathJaxService', ['renderMath']);

    await TestBed.configureTestingModule({
      imports: [MathContentComponent],
      providers: [
        { provide: MathJaxService, useValue: mockMathJaxService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathContentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
