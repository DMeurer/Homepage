import {ComponentFixture, TestBed} from "@angular/core/testing";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

import {FullscreenImageDialog} from "./fullscreen-image-dialog.component";

describe("FullscreenImageDialog", () => {
	let component: FullscreenImageDialog;
	let fixture: ComponentFixture<FullscreenImageDialog>;
	let mockDialogRef: jasmine.SpyObj<MatDialogRef<FullscreenImageDialog>>;
	let mockData: { src: string; alt: string };
	
	beforeEach(async() => {
		mockDialogRef = jasmine.createSpyObj("MatDialogRef", ["close"]);
		mockData = {
			src: "test-image.jpg",
			alt: "Test image alt text",
		};
		
		await TestBed.configureTestingModule({
			imports: [FullscreenImageDialog, NoopAnimationsModule],
			providers: [
				{provide: MatDialogRef, useValue: mockDialogRef},
				{provide: MAT_DIALOG_DATA, useValue: mockData},
			],
		}).compileComponents();
		
		fixture = TestBed.createComponent(FullscreenImageDialog);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});