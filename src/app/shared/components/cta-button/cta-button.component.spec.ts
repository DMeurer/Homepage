import {ComponentFixture, TestBed} from "@angular/core/testing";
import {provideIcons} from "@ng-icons/core";
import {matOpenInNew} from "@ng-icons/material-icons/baseline";

import {CtaButtonComponent} from "./cta-button.component";

describe("CtaButtonComponent", () => {
	let component: CtaButtonComponent;
	let fixture: ComponentFixture<CtaButtonComponent>;

	beforeEach(async() => {
		await TestBed.configureTestingModule({
			imports: [CtaButtonComponent],
			providers: [provideIcons({matOpenInNew})],
		})
			.compileComponents();

		fixture = TestBed.createComponent(CtaButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
