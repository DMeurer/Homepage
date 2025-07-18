import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {Router} from "@angular/router";

import {ProjectCardComponent} from "./project-card.component";
import {Project, ProjectChipType} from "../../data/projects/datatypes";

describe("ProjectCardComponent", () => {
	let component: ProjectCardComponent;
	let fixture: ComponentFixture<ProjectCardComponent>;
	let router: Router;
	let mockProject: Project;
	
	beforeEach(async() => {
		const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
		
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
			imports: [ProjectCardComponent, NoopAnimationsModule],
			providers: [
				{ provide: Router, useValue: routerSpy }
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
	
	it("should display project name", () => {
		const title = fixture.debugElement.query(By.css('mat-card-title'));
		expect(title).toBeTruthy();
		expect(title.nativeElement.textContent).toContain("Test Project");
	});
	
	it("should display project description", () => {
		const description = fixture.debugElement.query(By.css('mat-card-content p'));
		expect(description).toBeTruthy();
		expect(description.nativeElement.textContent).toContain("A test project description");
	});
	
	it("should display project image when provided", () => {
		const image = fixture.debugElement.query(By.css('img'));
		expect(image).toBeTruthy();
		expect(image.nativeElement.src).toContain("test-image.jpg");
		expect(image.nativeElement.alt).toBe("");
	});
	
	it("should not display image when not provided", () => {
		component.project.image = '';
		fixture.detectChanges();
		
		const image = fixture.debugElement.query(By.css('img'));
		expect(image).toBeFalsy();
	});
	
	it("should display project chips", () => {
		const chipSet = fixture.debugElement.query(By.css('mat-chip-set'));
		expect(chipSet).toBeTruthy();
		expect(chipSet.attributes['aria-label']).toBe("Project Tags");
		
		const chips = fixture.debugElement.queryAll(By.css('mat-chip'));
		expect(chips.length).toBe(2);
		expect(chips[0].nativeElement.textContent.trim()).toBe("TypeScript");
		expect(chips[1].nativeElement.textContent.trim()).toBe("Angular");
	});
	
	it("should disable ripple on chips", () => {
		const chips = fixture.debugElement.queryAll(By.css('mat-chip'));
		chips.forEach(chip => {
			expect(chip.attributes['disableRipple']).toBe('');
		});
	});
	
	it("should have router link with project tag", () => {
		const card = fixture.debugElement.query(By.css('mat-card'));
		expect(card).toBeTruthy();
		expect(card.attributes['ng-reflect-router-link']).toBe('test-project');
	});
	
	it("should have project-card CSS class", () => {
		const card = fixture.debugElement.query(By.css('mat-card'));
		expect(card.nativeElement.classList).toContain('project-card');
	});
	
	it("should have proper mat-card structure", () => {
		const card = fixture.debugElement.query(By.css('mat-card'));
		expect(card).toBeTruthy();
		
		const header = card.query(By.css('mat-card-header'));
		expect(header).toBeTruthy();
		
		const content = card.query(By.css('mat-card-content'));
		expect(content).toBeTruthy();
		
		const title = header.query(By.css('mat-card-title'));
		expect(title).toBeTruthy();
	});
	
	it("should handle project without chips", () => {
		component.project.chips = [];
		fixture.detectChanges();
		
		const chips = fixture.debugElement.queryAll(By.css('mat-chip'));
		expect(chips.length).toBe(0);
		
		const chipSet = fixture.debugElement.query(By.css('mat-chip-set'));
		expect(chipSet).toBeTruthy(); // ChipSet should still be present
	});
	
	it("should handle project with undefined image", () => {
		component.project.image = undefined;
		fixture.detectChanges();
		
		const image = fixture.debugElement.query(By.css('img'));
		expect(image).toBeFalsy();
	});
	
	it("should have required project input", () => {
		expect(component.project).toBeTruthy();
		expect(component.project).toBe(mockProject);
	});
	
	it("should expose NaN constant", () => {
		expect(component['NaN']).toBe(NaN);
	});
});
