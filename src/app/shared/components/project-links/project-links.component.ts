import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {NgIcon} from "@ng-icons/core";
import {ProjectLink} from "../../data/projects/datatypes";

@Component({
	selector: "app-project-links",
	imports: [NgIcon],
	templateUrl: "./project-links.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./project-links.component.scss",
})
export class ProjectLinksComponent {
	@Input() links: ProjectLink[] = [];
}
