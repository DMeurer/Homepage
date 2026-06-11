import {ComponentFixture, TestBed} from "@angular/core/testing";

import {MatrixBotComponent} from "./matrix-bot.component";

describe("MatrixBotComponent", () => {
	let component: MatrixBotComponent;
	let fixture: ComponentFixture<MatrixBotComponent>;
	
	beforeEach(async() => {
		await TestBed.configureTestingModule({
			imports: [MatrixBotComponent],
		})
			.compileComponents();
		
		fixture = TestBed.createComponent(MatrixBotComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
