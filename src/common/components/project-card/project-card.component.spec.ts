import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {Router, ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

import {ProjectCardComponent} from "./project-card.component";
import {Project, ProjectChipType} from "../../data/projects/datatypes";

describe("ProjectCardComponent", () => {
	let component: ProjectCardComponent;
	let fixture: ComponentFixture<ProjectCardComponent>;
	let router: Router;
	let mockProject: Project;
	
	beforeEach(async() => {
		const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
		const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
		
		mockProject = {
			name: "Test Project",
			description: "A test project description",
			tag: "test-project",
			image: "test-image.jpg",
			chips: [
				{ name: "TypeScript", type: ProjectChipType.LANGUAGE },
				{ name: "Angular", type: ProjectChipType.TOOL }
			]
		};
		
		await TestBed.configureTestingModule({
			imports: [ProjectCardComponent, NoopAnimationsModule, RouterTestingModule],
			providers: [
				{ provide: Router, useValue: routerSpy },
				{ provide: ActivatedRoute, useValue: activatedRouteSpy }
			]
		})
			.compileComponents();
		
		fixture = TestBed.createComponent(ProjectCardComponent);
		component = fixture.componentInstance;
		router = TestBed.inject(Router);
		component.project = mockProject;
		fixture.detectChanges();
	});
	
	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
