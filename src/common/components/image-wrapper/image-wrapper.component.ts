import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-image-wrapper',
    imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
    template: `
    <div class="image-container" (click)="openFullscreen()"
		 [style.width]="width"
		 [style.height]="height"
	>
      <img 
        [src]="src" 
        [alt]="alt" 
        [class]="imageClass"
        class="clickable-image"
        [style.width]="width"
        [style.height]="height"
        [style.object-fit]="objectFit"
      />
      <div class="overlay">
        <mat-icon class="expand-icon">fullscreen</mat-icon>
      </div>
    </div>
  `,
    styles: [`
    .image-container {
      position: relative;
      display: inline-block;
      cursor: pointer;
      overflow: hidden;
      border-radius: 8px;
    }

    .clickable-image {
      transition: transform 0.3s ease;
      display: block;
    }

    .image-container:hover .clickable-image {
      transform: scale(0.95);
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .image-container:hover .overlay {
      opacity: 1;
    }

    .expand-icon {
      color: white;
      font-size: 48px;
      width: 48px;
      height: 48px;
    }
  `]
})
export class ImageWrapperComponent {
	@Input() src: string = '';
	@Input() alt: string = '';
	@Input() width: string = 'auto';
	@Input() height: string = 'auto';
	@Input() objectFit: string = 'cover';
	@Input() imageClass: string = '';
	
	constructor(private dialog: MatDialog) {}
	
	openFullscreen() {
		this.dialog.open(FullscreenImageDialog, {
			data: { src: this.src, alt: this.alt },
			panelClass: 'fullscreen-dialog',
			maxWidth: '100vw',
			maxHeight: '100vh',
			hasBackdrop: true,
			backdropClass: 'fullscreen-backdrop'
		});
	}
}

@Component({
    selector: 'app-fullscreen-image-dialog',
    imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
    template: `
    <div class="fullscreen-container">
      <button 
        mat-icon-button 
        class="close-button"
        (click)="close()"
        aria-label="Close fullscreen image"
      >
        <mat-icon>close</mat-icon>
      </button>
      
      <div class="image-wrapper" (click)="close()">
        <img 
          [src]="data.src" 
          [alt]="data.alt"
          class="fullscreen-image"
        />
      </div>
    </div>
  `,
    styles: [`
    .fullscreen-container {
      position: relative;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .close-button {
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      width: 48px;
      height: 48px;
    }

    .close-button:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .close-button mat-icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }

    .image-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .fullscreen-image {
      max-width: 90vw;
      max-height: 90vh;
      object-fit: contain;
      border-radius: 8px;
    }
  `]
})
export class FullscreenImageDialog {
	constructor(
		private dialog: MatDialog,
		@Inject(MAT_DIALOG_DATA) public data: { src: string; alt: string }
	) {}
	
	close() {
		this.dialog.closeAll();
	}
}

// Don't forget to add these imports at the top
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';