import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

import {BlogComponent} from "./blog.component";

describe("BlogComponent", () => {
	let component: BlogComponent;
	let fixture: ComponentFixture<BlogComponent>;
	
	beforeEach(async() => {
		const activatedRouteSpy = jasmine.createSpyObj("ActivatedRoute", ["snapshot"]);
		
		await TestBed.configureTestingModule({
			imports: [BlogComponent, RouterTestingModule],
			providers: [
				{provide: ActivatedRoute, useValue: activatedRouteSpy},
			],
		})
			.compileComponents();
		
		fixture = TestBed.createComponent(BlogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
