import {ComponentFixture, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute} from "@angular/router";

import {ProjectsComponent} from "./projects.component";

describe("ProjectsComponent", () => {
	let component: ProjectsComponent;
	let fixture: ComponentFixture<ProjectsComponent>;
	
	beforeEach(async() => {
		const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
		
		await TestBed.configureTestingModule({
			imports: [ProjectsComponent, RouterTestingModule],
			providers: [
				{ provide: ActivatedRoute, useValue: activatedRouteSpy }
			]
		})
			.compileComponents();
		
		fixture = TestBed.createComponent(ProjectsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
