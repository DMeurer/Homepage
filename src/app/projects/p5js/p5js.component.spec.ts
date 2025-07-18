import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

import {P5jsComponent} from "./p5js.component";

describe("P5jsComponent", () => {
	let component: P5jsComponent;
	let fixture: ComponentFixture<P5jsComponent>;
	
	beforeEach(async() => {
		const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
		
		await TestBed.configureTestingModule({
			imports: [P5jsComponent, RouterTestingModule],
			providers: [
				{ provide: ActivatedRoute, useValue: activatedRouteSpy }
			]
		})
			.compileComponents();
		
		fixture = TestBed.createComponent(P5jsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
