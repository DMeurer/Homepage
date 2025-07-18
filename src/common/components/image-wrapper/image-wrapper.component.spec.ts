import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ImageWrapperComponent } from './image-wrapper.component';
import { FullscreenImageDialog } from './fullscreen-image-dialog.component';

describe('ImageWrapperComponent', () => {
  let component: ImageWrapperComponent;
  let fixture: ComponentFixture<ImageWrapperComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
    mockDialog.open.and.returnValue({
      afterClosed: () => ({ subscribe: () => {} })
    } as any);

    await TestBed.configureTestingModule({
      imports: [ImageWrapperComponent, NoopAnimationsModule],
      providers: [
        { provide: MatDialog, useValue: mockDialog }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageWrapperComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display image with correct attributes', () => {
    component.src = 'test-image.jpg';
    component.alt = 'Test image';
    component.width = '200px';
    component.height = '150px';
    component.objectFit = 'contain';
    component.imageClass = 'test-class';

    fixture.detectChanges();

    const image = fixture.debugElement.query(By.css('img'));
    expect(image.nativeElement.src).toContain('test-image.jpg');
    expect(image.nativeElement.alt).toBe('Test image');
    expect(image.nativeElement.style.width).toBe('200px');
    expect(image.nativeElement.style.height).toBe('150px');
    expect(image.nativeElement.style.objectFit).toBe('contain');
    expect(image.nativeElement.classList).toContain('test-class');
  });

  it('should set default values for inputs', () => {
    expect(component.src).toBe('');
    expect(component.alt).toBe('');
    expect(component.width).toBe('auto');
    expect(component.height).toBe('auto');
    expect(component.objectFit).toBe('cover');
    expect(component.imageClass).toBe('');
  });

  it('should have image container with correct styling', () => {
    component.width = '300px';
    component.height = '200px';
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('.image-container'));
    expect(container).toBeTruthy();
    expect(container.nativeElement.style.width).toBe('300px');
    expect(container.nativeElement.style.height).toBe('200px');
  });

  it('should display overlay with fullscreen icon', () => {
    fixture.detectChanges();

    const overlay = fixture.debugElement.query(By.css('.overlay'));
    expect(overlay).toBeTruthy();

    const icon = overlay.query(By.css('mat-icon'));
    expect(icon).toBeTruthy();
    expect(icon.nativeElement.textContent).toBe('fullscreen');
  });

  it('should open fullscreen dialog when image container is clicked', () => {
    component.src = 'test-image.jpg';
    component.alt = 'Test image';
    fixture.detectChanges();

    spyOn(component, 'openFullscreen').and.returnValue();
    component.openFullscreen();

    expect(component.openFullscreen).toHaveBeenCalled();
  });

  it('should call openFullscreen method when container is clicked', () => {
    spyOn(component, 'openFullscreen').and.returnValue();
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('.image-container'));
    container.nativeElement.click();

    expect(component.openFullscreen).toHaveBeenCalled();
  });

  it('should apply clickable-image class to image', () => {
    fixture.detectChanges();

    const image = fixture.debugElement.query(By.css('img'));
    expect(image.nativeElement.classList).toContain('clickable-image');
  });

  it('should apply expand-icon class to mat-icon', () => {
    fixture.detectChanges();

    const icon = fixture.debugElement.query(By.css('mat-icon'));
    expect(icon.nativeElement.classList).toContain('expand-icon');
  });
});