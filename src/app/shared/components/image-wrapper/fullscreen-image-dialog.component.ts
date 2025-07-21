import {Component, Inject} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {NgIcon} from "@ng-icons/core";
import {NgIf} from "@angular/common";

@Component({
	selector: "app-fullscreen-image-dialog",
	imports: [MatIconModule, MatButtonModule, MatDialogModule, NgIcon, NgIf],
	templateUrl: "./fullscreen-image-dialog.component.html",
	styleUrl: "./fullscreen-image-dialog.component.scss",
})
export class FullscreenImageDialog {
	constructor(
		private dialogRef: MatDialogRef<FullscreenImageDialog>,
		@Inject(MAT_DIALOG_DATA) public data: { src: string; alt: string; backgroundColor?: string },
	) {}
	
	isVideo(): boolean {
		return this.data.src.endsWith('.webm') || this.data.src.endsWith('.mp4');
	}
	
	close() {
		this.dialogRef.close();
	}
}