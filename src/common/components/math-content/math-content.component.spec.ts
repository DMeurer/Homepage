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

  it('should have default empty content', () => {
    expect(component.content).toBe('');
  });

  it('should display math content in container', () => {
    component.content = '$x = 2$';
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('div'));
    expect(container).toBeTruthy();
    expect(container.nativeElement.innerHTML).toContain('$x = 2$');
  });

  it('should call MathJax service to render math after view init', () => {
    component.content = '$x = 2$';
    fixture.detectChanges();

    component.ngAfterViewInit();

    expect(mockMathJaxService.renderMath).toHaveBeenCalled();
  });

  it('should call MathJax service to render math when content changes', () => {
    component.content = '$x = 2$';
    fixture.detectChanges();

    const changes: SimpleChanges = {
      content: {
        currentValue: '$x = 2$',
        previousValue: '',
        firstChange: false,
        isFirstChange: () => false
      }
    };

    component.ngOnChanges(changes);

    expect(mockMathJaxService.renderMath).toHaveBeenCalled();
  });

  it('should handle empty content', () => {
    component.content = '';
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('div'));
    expect(container).toBeTruthy();
    expect(container.nativeElement.innerHTML).toBe('');
  });

  it('should handle complex math expressions', () => {
    const complexMath = '$$\\frac{x^2 + y^2}{z^2} = \\sqrt{\\alpha}$$';
    component.content = complexMath;
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('div'));
    expect(container.nativeElement.innerHTML).toContain(complexMath);
  });

  it('should handle inline math expressions', () => {
    const inlineMath = 'The equation $x = 2$ is simple.';
    component.content = inlineMath;
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('div'));
    expect(container.nativeElement.innerHTML).toContain(inlineMath);
  });

  it('should handle display math expressions', () => {
    const displayMath = '$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$';
    component.content = displayMath;
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('div'));
    expect(container.nativeElement.innerHTML).toContain(displayMath);
  });

  it('should update content when input changes', () => {
    // Initial content
    component.content = '$x = 1$';
    fixture.detectChanges();

    let container = fixture.debugElement.query(By.css('div'));
    expect(container.nativeElement.innerHTML).toContain('$x = 1$');

    // Updated content
    component.content = '$x = 2$';
    fixture.detectChanges();

    container = fixture.debugElement.query(By.css('div'));
    expect(container.nativeElement.innerHTML).toContain('$x = 2$');
  });

  it('should have math container div', () => {
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('div'));
    expect(container).toBeTruthy();
  });

  it('should call renderMath multiple times when content changes', () => {
    component.content = '$x = 1$';
    fixture.detectChanges();
    component.ngAfterViewInit();

    component.content = '$x = 2$';
    const changes: SimpleChanges = {
      content: {
        currentValue: '$x = 2$',
        previousValue: '$x = 1$',
        firstChange: false,
        isFirstChange: () => false
      }
    };
    component.ngOnChanges(changes);

    expect(mockMathJaxService.renderMath).toHaveBeenCalledTimes(2);
  });
});
