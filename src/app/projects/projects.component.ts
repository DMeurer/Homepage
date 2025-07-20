import {Component} from "@angular/core";
import {PROJECTS} from "../shared/data/projects/projects";
import {ProjectCardComponent} from "../shared/components/project-card/project-card.component";

@Component({
	selector: "app-projects",
	imports: [
		ProjectCardComponent,
	],
	templateUrl: "./projects.component.html",
	styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
	protected readonly PROJECTS = PROJECTS;
}
