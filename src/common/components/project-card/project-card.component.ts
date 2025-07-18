import { NgOptimizedImage } from "@angular/common";
import {Component, Input} from "@angular/core";
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
    NgOptimizedImage
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
	
	protected readonly NaN = NaN;
}
