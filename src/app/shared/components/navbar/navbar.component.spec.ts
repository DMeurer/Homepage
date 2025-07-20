import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ActivatedRoute, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

import {NavbarComponent} from "./navbar.component";

describe("NavbarComponent", () => {
	let component: NavbarComponent;
	let fixture: ComponentFixture<NavbarComponent>;
	let router: Router;
	
	beforeEach(async() => {
		const activatedRouteSpy = jasmine.createSpyObj("ActivatedRoute", ["snapshot"]);
		
		await TestBed.configureTestingModule({
			imports: [NavbarComponent, NoopAnimationsModule, RouterTestingModule],
			providers: [
				{provide: ActivatedRoute, useValue: activatedRouteSpy},
			],
		})
			.compileComponents();
		
		fixture = TestBed.createComponent(NavbarComponent);
		component = fixture.componentInstance;
		router = TestBed.inject(Router);
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
