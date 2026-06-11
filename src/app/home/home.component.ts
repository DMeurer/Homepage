import {Component, ChangeDetectionStrategy} from "@angular/core";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
	selector: "app-home",
	imports: [
		MatButton,
		MatCard,
		MatCardContent,
		MatCardHeader,
		MatCardTitle,
		RouterLink,
	],
	templateUrl: "./home.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	
}
