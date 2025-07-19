import {TestBed} from "@angular/core/testing";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {AppComponent} from "./app.component";

describe("AppComponent", () => {
	beforeEach(async() => {
		const activatedRouteSpy = jasmine.createSpyObj("ActivatedRoute", ["snapshot"]);
		
		await TestBed.configureTestingModule({
			imports: [AppComponent, RouterTestingModule],
			providers: [
				{provide: ActivatedRoute, useValue: activatedRouteSpy},
			],
		}).compileComponents();
	});
	
	it("should create the app", () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
	
});
