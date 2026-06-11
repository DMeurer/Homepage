import {Component, ChangeDetectionStrategy} from "@angular/core";
import {RedirectComponent} from "../../shared/components/redirect/redirect.component";

@Component({
	selector: "app-pretty-print-dmeurer",
	imports: [
		RedirectComponent,
	],
	templateUrl: "./pretty-print-dmeurer.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./pretty-print-dmeurer.component.scss",
})
export class PrettyPrintDmeurerComponent {
	
}
