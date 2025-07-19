import {ComponentFixture, TestBed} from "@angular/core/testing";
import {MatDialog} from "@angular/material/dialog";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

import {ImageContentLayoutComponent} from "./image-content-layout.component";

describe("ImageContentLayoutComponent", () => {
	let component: ImageContentLayoutComponent;
	let fixture: ComponentFixture<ImageContentLayoutComponent>;
	let mockDialog: jasmine.SpyObj<MatDialog>;
	
	beforeEach(async() => {
		mockDialog = jasmine.createSpyObj("MatDialog", ["open"]);
		
		await TestBed.configureTestingModule({
			imports: [ImageContentLayoutComponent, NoopAnimationsModule],
			providers: [
				{provide: MatDialog, useValue: mockDialog},
			],
		}).compileComponents();
		
		fixture = TestBed.createComponent(ImageContentLayoutComponent);
		component = fixture.componentInstance;
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});