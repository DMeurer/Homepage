import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Router, ActivatedRoute} from "@angular/router";
import {By} from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {RouterTestingModule} from "@angular/router/testing";

import {HomeComponent} from "./home.component";

describe("HomeComponent", () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	let router: Router;
	
	beforeEach(async() => {
		const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
		const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
		
		await TestBed.configureTestingModule({
			imports: [HomeComponent, NoopAnimationsModule, RouterTestingModule],
			providers: [
				{ provide: Router, useValue: routerSpy },
				{ provide: ActivatedRoute, useValue: activatedRouteSpy }
			]
		})
			.compileComponents();
		
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		router = TestBed.inject(Router);
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
