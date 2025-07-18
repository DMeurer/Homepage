import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FullscreenImageDialog } from './fullscreen-image-dialog.component';

describe('FullscreenImageDialog', () => {
  let component: FullscreenImageDialog;
  let fixture: ComponentFixture<FullscreenImageDialog>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<FullscreenImageDialog>>;
  let mockData: { src: string; alt: string };

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    mockData = {
      src: 'test-image.jpg',
      alt: 'Test image alt text'
    };

    await TestBed.configureTestingModule({
      imports: [FullscreenImageDialog, NoopAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: mockData }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FullscreenImageDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display image with correct src and alt from data', () => {
    const image = fixture.debugElement.query(By.css('.fullscreen-image'));
    expect(image).toBeTruthy();
    expect(image.nativeElement.src).toContain('test-image.jpg');
    expect(image.nativeElement.alt).toBe('Test image alt text');
  });

  it('should have close button with correct icon', () => {
    const closeButton = fixture.debugElement.query(By.css('.close-button'));
    expect(closeButton).toBeTruthy();
    expect(closeButton.attributes['aria-label']).toBe('Close fullscreen image');

    const icon = closeButton.query(By.css('mat-icon'));
    expect(icon).toBeTruthy();
    expect(icon.nativeElement.textContent).toBe('close');
  });

  it('should close dialog when close button is clicked', () => {
    const closeButton = fixture.debugElement.query(By.css('.close-button'));
    closeButton.nativeElement.click();

    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should close dialog when image wrapper is clicked', () => {
    const imageWrapper = fixture.debugElement.query(By.css('.image-wrapper'));
    imageWrapper.nativeElement.click();

    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should call close method when close button is clicked', () => {
    spyOn(component, 'close');
    const closeButton = fixture.debugElement.query(By.css('.close-button'));
    closeButton.nativeElement.click();

    expect(component.close).toHaveBeenCalled();
  });

  it('should call close method when image wrapper is clicked', () => {
    spyOn(component, 'close');
    const imageWrapper = fixture.debugElement.query(By.css('.image-wrapper'));
    imageWrapper.nativeElement.click();

    expect(component.close).toHaveBeenCalled();
  });

  it('should have fullscreen container with correct structure', () => {
    const container = fixture.debugElement.query(By.css('.fullscreen-container'));
    expect(container).toBeTruthy();

    const imageWrapper = container.query(By.css('.image-wrapper'));
    expect(imageWrapper).toBeTruthy();

    const image = imageWrapper.query(By.css('.fullscreen-image'));
    expect(image).toBeTruthy();
  });

  it('should have correct data property', () => {
    expect(component.data).toBe(mockData);
    expect(component.data.src).toBe('test-image.jpg');
    expect(component.data.alt).toBe('Test image alt text');
  });

  it('should apply correct CSS classes', () => {
    const container = fixture.debugElement.query(By.css('.fullscreen-container'));
    expect(container.nativeElement.classList).toContain('fullscreen-container');

    const closeButton = fixture.debugElement.query(By.css('.close-button'));
    expect(closeButton.nativeElement.classList).toContain('close-button');

    const imageWrapper = fixture.debugElement.query(By.css('.image-wrapper'));
    expect(imageWrapper.nativeElement.classList).toContain('image-wrapper');

    const image = fixture.debugElement.query(By.css('.fullscreen-image'));
    expect(image.nativeElement.classList).toContain('fullscreen-image');
  });
});