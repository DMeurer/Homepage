import {formatDate} from "@angular/common";
import {Component, Inject, Input, LOCALE_ID, OnInit} from "@angular/core";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {RouterLink} from "@angular/router";
import {Project} from "../../data/projects/datatypes";

@Component({
	selector: "app-project-card",
	imports: [
		MatChipSet,
		MatChip,
		MatCard,
		MatCardHeader,
		MatCardContent,
		MatCardTitle,
		RouterLink,
	
	],
	inputs: [
		"project",
	],
	templateUrl: "./project-card.component.html",
	styleUrl: "./project-card.component.scss",
})
export class ProjectCardComponent implements OnInit {
	
	@Input!() project!: Project;
	protected dateString: string = "";
	
	constructor(@Inject(LOCALE_ID) private locale: string) {}
	
	ngOnInit(): void {
		if (this.project?.date) {
			this.dateString = formatDate(this.project.date, "yyyy-MM-dd", this.locale);
		} else {
			this.dateString = "";
		}
	}
}
