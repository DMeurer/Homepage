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
	
	it("should display hero title", () => {
		const heroTitle = fixture.debugElement.query(By.css('.hero-title'));
		expect(heroTitle.nativeElement.textContent).toContain("Hi, I'm Dominik Meurer");
	});
	
	it("should display hero description", () => {
		const heroDescription = fixture.debugElement.query(By.css('.hero-description'));
		expect(heroDescription.nativeElement.textContent).toContain("Welcome to my personal website");
	});
	
	it("should display projects section card", () => {
		const projectsCard = fixture.debugElement.query(By.css('.projects-card'));
		expect(projectsCard).toBeTruthy();
		
		const projectsTitle = projectsCard.query(By.css('mat-card-title'));
		expect(projectsTitle.nativeElement.textContent).toContain("Projects");
	});
	
	it("should display blog section card", () => {
		const blogCard = fixture.debugElement.query(By.css('.blog-card'));
		expect(blogCard).toBeTruthy();
		
		const blogTitle = blogCard.query(By.css('mat-card-title'));
		expect(blogTitle.nativeElement.textContent).toContain("Blog");
	});
	
	it("should have View Projects button with correct routerLink", () => {
		const projectsButton = fixture.debugElement.query(By.css('.projects-card button'));
		expect(projectsButton).toBeTruthy();
		expect(projectsButton.nativeElement.textContent.trim()).toBe("View Projects");
		expect(projectsButton.attributes['routerLink']).toBe('/projects');
	});
	
	it("should have Read Blog button with correct routerLink", () => {
		const blogButton = fixture.debugElement.query(By.css('.blog-card button'));
		expect(blogButton).toBeTruthy();
		expect(blogButton.nativeElement.textContent.trim()).toBe("Read Blog");
		expect(blogButton.attributes['routerLink']).toBe('/blog');
	});
	
	
	it("should have proper responsive structure", () => {
		const homeContainer = fixture.debugElement.query(By.css('.home-container'));
		expect(homeContainer).toBeTruthy();
		
		const sectionsGrid = fixture.debugElement.query(By.css('.sections-grid'));
		expect(sectionsGrid).toBeTruthy();
		
		const sectionCards = fixture.debugElement.queryAll(By.css('.section-card'));
		expect(sectionCards.length).toBe(2);
	});
});
