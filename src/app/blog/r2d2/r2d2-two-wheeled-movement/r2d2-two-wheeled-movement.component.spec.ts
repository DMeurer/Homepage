import {ComponentFixture, TestBed} from "@angular/core/testing";

import {R2d2TwoWheeledMovementComponent} from "./r2d2-two-wheeled-movement.component";

describe("R2d2TwoWheeledMovementComponent", () => {
	let component: R2d2TwoWheeledMovementComponent;
	let fixture: ComponentFixture<R2d2TwoWheeledMovementComponent>;
	
	beforeEach(async() => {
		await TestBed.configureTestingModule({
			imports: [R2d2TwoWheeledMovementComponent],
		})
			.compileComponents();
		
		fixture = TestBed.createComponent(R2d2TwoWheeledMovementComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
