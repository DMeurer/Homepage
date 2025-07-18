import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

import {NavbarComponent} from "./navbar.component";

describe("NavbarComponent", () => {
	let component: NavbarComponent;
	let fixture: ComponentFixture<NavbarComponent>;
	let router: Router;
	
	beforeEach(async() => {
		await TestBed.configureTestingModule({
			imports: [NavbarComponent, NoopAnimationsModule, RouterTestingModule],
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
	
	it("should display logo and site name", () => {
		const logoLink = fixture.debugElement.query(By.css('a[routerLink="/"]'));
		expect(logoLink).toBeTruthy();
		expect(logoLink.nativeElement.textContent.trim()).toContain("DMeurer");
		
		const logo = logoLink.query(By.css('app-logo'));
		expect(logo).toBeTruthy();
	});
	
	it("should display navigation sections", () => {
		const sections = component.sections;
		expect(sections).toBeTruthy();
		expect(sections['projects']).toBeTruthy();
		expect(sections['blog']).toBeTruthy();
		
		const navLinks = fixture.debugElement.queryAll(By.css('a[routerLinkActive]'));
		expect(navLinks.length).toBeGreaterThan(0);
	});
	
	it("should display section keys", () => {
		const sectionKeys = component.sectionKeys;
		expect(sectionKeys).toContain('projects');
		expect(sectionKeys).toContain('blog');
	});
	
	
	it("should have proper navbar structure", () => {
		const navbar = fixture.debugElement.query(By.css('nav.docs-navbar-header'));
		expect(navbar).toBeTruthy();
		expect(navbar.attributes['aria-label']).toBe('Top Toolbar');
		
		const mobileNavbar = fixture.debugElement.query(By.css('nav.docs-navbar'));
		expect(mobileNavbar).toBeTruthy();
		expect(mobileNavbar.attributes['aria-label']).toBe('Section Nav Bar');
	});
	
	it("should have flex-spacer for layout", () => {
		const flexSpacer = fixture.debugElement.query(By.css('.flex-spacer'));
		expect(flexSpacer).toBeTruthy();
	});
	
	it("should have responsive classes", () => {
		const hideSmallElements = fixture.debugElement.queryAll(By.css('.docs-navbar-hide-small'));
		expect(hideSmallElements.length).toBeGreaterThan(0);
		
		const showSmallElements = fixture.debugElement.queryAll(By.css('.docs-navbar-show-small'));
		expect(showSmallElements.length).toBeGreaterThan(0);
	});
	
	it("should have proper button types", () => {
		const matButtons = fixture.debugElement.queryAll(By.css('[mat-button]'));
		expect(matButtons.length).toBeGreaterThan(0);
		
		const iconButtons = fixture.debugElement.queryAll(By.css('[mat-icon-button]'));
		expect(iconButtons.length).toBeGreaterThan(0);
	});
	
	it("should have navigation items with router links", () => {
		const routerLinks = fixture.debugElement.queryAll(By.css('[routerLink]'));
		expect(routerLinks.length).toBeGreaterThan(0);
		
		// Check for specific router links
		const homeLink = fixture.debugElement.query(By.css('a[routerLink="/"]'));
		expect(homeLink).toBeTruthy();
	});
	
	it("should properly cleanup on destroy", () => {
		spyOn(component['subscriptions'], 'unsubscribe');
		
		component.ngOnDestroy();
		
		expect(component['subscriptions'].unsubscribe).toHaveBeenCalled();
	});
	
	it("should display section navigation items", () => {
		const sectionKeys = component.sectionKeys;
		
		sectionKeys.forEach(key => {
			const section = component.sections[key];
			expect(section).toBeTruthy();
			expect(section.name).toBeTruthy();
			expect(section.summary).toBeTruthy();
		});
	});
});
