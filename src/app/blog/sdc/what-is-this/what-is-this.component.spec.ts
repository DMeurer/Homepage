import {ComponentFixture, TestBed} from "@angular/core/testing";

import {SdcWhatIsThisComponent} from "./what-is-this.component";

describe("SdcWhatIsThisComponent", () => {
	let component: SdcWhatIsThisComponent;
	let fixture: ComponentFixture<SdcWhatIsThisComponent>;

	beforeEach(async() => {
		await TestBed.configureTestingModule({
			imports: [SdcWhatIsThisComponent],
		})
			.compileComponents();

		fixture = TestBed.createComponent(SdcWhatIsThisComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
