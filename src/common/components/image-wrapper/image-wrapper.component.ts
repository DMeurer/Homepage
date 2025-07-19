import { Component, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FullscreenImageDialog } from './fullscreen-image-dialog.component';

@Component({
    selector: 'app-image-wrapper',
    imports: [MatIconModule, MatButtonModule, MatDialogModule],
    templateUrl: './image-wrapper.component.html',
    styleUrl: './image-wrapper.component.scss'
})
export class ImageWrapperComponent {
	@Input() src: string = '';
	@Input() alt: string = '';
	@Input() width: string = 'auto';
	@Input() height: string = 'auto';
	@Input() objectFit: string = 'cover';
	@Input() imageClass: string = '';
	@Input() backgroundColor: string = 'transparent';

	constructor(private dialog: MatDialog) {}

	openFullscreen() {
		this.dialog.open(FullscreenImageDialog, {
			data: { src: this.src, alt: this.alt, backgroundColor: this.backgroundColor },
			panelClass: 'fullscreen-dialog',
			maxWidth: '100vw',
			maxHeight: '100vh',
			hasBackdrop: true,
			backdropClass: 'fullscreen-backdrop'
		});
	}
}