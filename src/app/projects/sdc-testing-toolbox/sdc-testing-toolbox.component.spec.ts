import {ComponentFixture, TestBed} from "@angular/core/testing";

import {SdcTestingToolboxComponent} from "./sdc-testing-toolbox.component";

describe("SdcTestingToolboxComponent", () => {
	let component: SdcTestingToolboxComponent;
	let fixture: ComponentFixture<SdcTestingToolboxComponent>;

	beforeEach(async() => {
		await TestBed.configureTestingModule({
			imports: [SdcTestingToolboxComponent],
		})
			.compileComponents();

		fixture = TestBed.createComponent(SdcTestingToolboxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
