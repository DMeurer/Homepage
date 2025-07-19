import {Component, Inject} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";

@Component({
	selector: "app-fullscreen-image-dialog",
	imports: [MatIconModule, MatButtonModule, MatDialogModule],
	templateUrl: "./fullscreen-image-dialog.component.html",
	styleUrl: "./fullscreen-image-dialog.component.scss",
})
export class FullscreenImageDialog {
	constructor(
		private dialogRef: MatDialogRef<FullscreenImageDialog>,
		@Inject(MAT_DIALOG_DATA) public data: { src: string; alt: string; backgroundColor?: string },
	) {}
	
	close() {
		this.dialogRef.close();
	}
}