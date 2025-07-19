import {formatDate, NgIf} from "@angular/common";
import {Component, Inject, Input, LOCALE_ID} from "@angular/core";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
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
		MatCardSubtitle,
		NgIf,
	],
    inputs: [
        "project",
    ],
    templateUrl: "./project-card.component.html",
    styleUrl: "./project-card.component.scss"
})
export class ProjectCardComponent {
	
	@Input!()
	project!: Project;
	protected dateString: string;
	
	constructor(@Inject(LOCALE_ID) private locale: string) {
		this.dateString = formatDate(Date.now(),'yyyy-MM-dd',this.locale);
	}
}
