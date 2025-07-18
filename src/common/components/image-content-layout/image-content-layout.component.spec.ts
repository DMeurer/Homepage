import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';

import { ImageContentLayoutComponent, LayoutRatio, ImagePosition } from './image-content-layout.component';

describe('ImageContentLayoutComponent', () => {
  let component: ImageContentLayoutComponent;
  let fixture: ComponentFixture<ImageContentLayoutComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [ImageContentLayoutComponent, NoopAnimationsModule],
      providers: [
        { provide: MatDialog, useValue: mockDialog }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageContentLayoutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set default values for inputs', () => {
    expect(component.imageSrc).toBe('');
    expect(component.imageAlt).toBe('');
    expect(component.imageHeight).toBe('400px');
    expect(component.imageObjectFit).toBe('cover');
    expect(component.ratio).toBe('50-50');
    expect(component.imagePosition).toBe('left');
    expect(component.imageClass).toBe('');
  });

  it('should display image wrapper with correct inputs', () => {
    component.imageSrc = 'test-image.jpg';
    component.imageAlt = 'Test image';
    component.imageHeight = '300px';
    component.imageObjectFit = 'contain';
    component.imageClass = 'test-class';
    
    fixture.detectChanges();

    const imageWrapper = fixture.debugElement.query(By.css('app-image-wrapper'));
    expect(imageWrapper).toBeTruthy();
    expect(imageWrapper.attributes['ng-reflect-src']).toBe('test-image.jpg');
    expect(imageWrapper.attributes['ng-reflect-alt']).toBe('Test image');
    expect(imageWrapper.attributes['ng-reflect-width']).toBe('100%');
    expect(imageWrapper.attributes['ng-reflect-height']).toBe('300px');
    expect(imageWrapper.attributes['ng-reflect-object-fit']).toBe('contain');
    expect(imageWrapper.attributes['ng-reflect-image-class']).toBe('test-class');
  });

  it('should have correct container classes for different ratios', () => {
    // Test 2img-1text ratio
    component.ratio = '2img-1text';
    component.imagePosition = 'left';
    fixture.detectChanges();

    let container = fixture.debugElement.query(By.css('.layout-container'));
    expect(container.nativeElement.classList).toContain('ratio-2img-1text');
    expect(container.nativeElement.classList).toContain('image-left');

    // Test 50-50 ratio
    component.ratio = '50-50';
    component.imagePosition = 'right';
    fixture.detectChanges();

    container = fixture.debugElement.query(By.css('.layout-container'));
    expect(container.nativeElement.classList).toContain('ratio-50-50');
    expect(container.nativeElement.classList).toContain('image-right');

    // Test 1img-2text ratio
    component.ratio = '1img-2text';
    fixture.detectChanges();

    container = fixture.debugElement.query(By.css('.layout-container'));
    expect(container.nativeElement.classList).toContain('ratio-1img-2text');
  });

  it('should have image and content sections', () => {
    fixture.detectChanges();

    const imageSection = fixture.debugElement.query(By.css('.image-section'));
    expect(imageSection).toBeTruthy();

    const contentSection = fixture.debugElement.query(By.css('.content-section'));
    expect(contentSection).toBeTruthy();

    const contentWrapper = contentSection.query(By.css('.content-wrapper'));
    expect(contentWrapper).toBeTruthy();
  });

  it('should project content in content wrapper', () => {
    fixture.detectChanges();

    const contentWrapper = fixture.debugElement.query(By.css('.content-wrapper'));
    const ngContent = contentWrapper.query(By.css('ng-content'));
    expect(ngContent).toBeTruthy();
  });

  it('should return correct container classes', () => {
    component.ratio = '2img-1text';
    component.imagePosition = 'right';

    const classes = component.containerClasses;
    expect(classes['ratio-2img-1text']).toBe(true);
    expect(classes['image-right']).toBe(true);
  });

  it('should return correct image section classes', () => {
    const classes = component.imageSectionClasses;
    expect(classes['image-section']).toBe(true);
  });

  it('should return correct content section classes', () => {
    const classes = component.contentSectionClasses;
    expect(classes['content-section']).toBe(true);
  });

  it('should handle all layout ratios', () => {
    const ratios: LayoutRatio[] = ['2img-1text', '50-50', '1img-2text'];
    
    ratios.forEach(ratio => {
      component.ratio = ratio;
      fixture.detectChanges();
      
      const container = fixture.debugElement.query(By.css('.layout-container'));
      expect(container.nativeElement.classList).toContain(`ratio-${ratio}`);
    });
  });

  it('should handle all image positions', () => {
    const positions: ImagePosition[] = ['left', 'right'];
    
    positions.forEach(position => {
      component.imagePosition = position;
      fixture.detectChanges();
      
      const container = fixture.debugElement.query(By.css('.layout-container'));
      expect(container.nativeElement.classList).toContain(`image-${position}`);
    });
  });

  it('should apply correct ngClass to layout container', () => {
    component.ratio = '1img-2text';
    component.imagePosition = 'right';
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('.layout-container'));
    expect(container.attributes['ng-reflect-ng-class']).toContain('ratio-1img-2text');
    expect(container.attributes['ng-reflect-ng-class']).toContain('image-right');
  });

  it('should apply correct ngClass to image section', () => {
    fixture.detectChanges();

    const imageSection = fixture.debugElement.query(By.css('.image-section'));
    expect(imageSection.attributes['ng-reflect-ng-class']).toContain('image-section');
  });

  it('should apply correct ngClass to content section', () => {
    fixture.detectChanges();

    const contentSection = fixture.debugElement.query(By.css('.content-section'));
    expect(contentSection.attributes['ng-reflect-ng-class']).toContain('content-section');
  });
});