import {NgIf} from "@angular/common";
import {Component, Input} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {NgIcon} from "@ng-icons/core";

import {FullscreenImageDialog} from "./fullscreen-image-dialog.component";

@Component({
	selector: "app-image-wrapper",
	imports: [MatIconModule, MatButtonModule, MatDialogModule, NgIcon, NgIf],
	templateUrl: "./image-wrapper.component.html",
	styleUrl: "./image-wrapper.component.scss",
})
export class ImageWrapperComponent {
	@Input() src: string = "";
	@Input() alt: string = "";
	@Input() width: string = "auto";
	@Input() height: string = "auto";
	@Input() objectFit: string = "cover";
	@Input() imageClass: string = "";
	@Input() backgroundColor: string = "transparent";
	
	constructor(private dialog: MatDialog) {}
	
	isVideo(): boolean {
		return this.src.endsWith(".webm") || this.src.endsWith(".mp4");
	}
	
	openFullscreen() {
		this.dialog.open(FullscreenImageDialog, {
			data: {src: this.src, alt: this.alt, backgroundColor: this.backgroundColor},
			panelClass: "fullscreen-dialog",
			maxWidth: "100vw",
			maxHeight: "100vh",
			hasBackdrop: true,
			backdropClass: "fullscreen-backdrop",
		});
	}
}