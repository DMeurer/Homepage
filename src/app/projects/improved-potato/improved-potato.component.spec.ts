import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

import {ImprovedPotatoComponent} from "./improved-potato.component";

describe("ImprovedPotatoComponent", () => {
	let component: ImprovedPotatoComponent;
	let fixture: ComponentFixture<ImprovedPotatoComponent>;
	
	beforeEach(async() => {
		const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
		
		await TestBed.configureTestingModule({
			imports: [ImprovedPotatoComponent, RouterTestingModule],
			providers: [
				{ provide: ActivatedRoute, useValue: activatedRouteSpy }
			]
		})
			.compileComponents();
		
		fixture = TestBed.createComponent(ImprovedPotatoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
	
});
