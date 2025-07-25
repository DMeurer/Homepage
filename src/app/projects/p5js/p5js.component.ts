import {Component} from "@angular/core";
import {ProjectCardComponent} from "../../shared/components/project-card/project-card.component";
import {PROJECTS_P5JS} from "../../shared/data/projects/projects";

@Component({
	selector: "app-p5js",
	imports: [
		ProjectCardComponent,
	],
	templateUrl: "./p5js.component.html",
	styleUrl: "./p5js.component.scss",
})
export class P5jsComponent {
	protected readonly PROJECTS_P5JS = PROJECTS_P5JS;
}
