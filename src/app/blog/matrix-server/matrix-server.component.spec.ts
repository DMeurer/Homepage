import {ComponentFixture, TestBed} from "@angular/core/testing";

import {MatrixServerComponent} from "./matrix-server.component";

describe("MatrixServerComponent", () => {
	let component: MatrixServerComponent;
	let fixture: ComponentFixture<MatrixServerComponent>;

	beforeEach(async() => {
		await TestBed.configureTestingModule({
			imports: [MatrixServerComponent],
		})
			.compileComponents();

		fixture = TestBed.createComponent(MatrixServerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
