import {Component, ChangeDetectionStrategy} from "@angular/core";
import {RedirectComponent} from "../../shared/components/redirect/redirect.component";

@Component({
	selector: "app-improved-potato",
	imports: [RedirectComponent],
	templateUrl: "./improved-potato.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./improved-potato.component.scss",
})
export class ImprovedPotatoComponent {
}
