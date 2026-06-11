import {ComponentFixture, TestBed} from "@angular/core/testing";
import {provideIcons} from "@ng-icons/core";
import {matCode, matOpenInNew} from "@ng-icons/material-icons/baseline";

import {ProjectLinksComponent} from "./project-links.component";

describe("ProjectLinksComponent", () => {
	let component: ProjectLinksComponent;
	let fixture: ComponentFixture<ProjectLinksComponent>;

	beforeEach(async() => {
		await TestBed.configureTestingModule({
			imports: [ProjectLinksComponent],
			providers: [provideIcons({matCode, matOpenInNew})],
		})
			.compileComponents();

		fixture = TestBed.createComponent(ProjectLinksComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
