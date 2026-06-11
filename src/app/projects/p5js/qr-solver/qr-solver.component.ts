import {Component, ChangeDetectionStrategy} from "@angular/core";
import {MatAnchor} from "@angular/material/button";

@Component({
	selector: "app-qr-solver",
	imports: [
		MatAnchor,
	],
	templateUrl: "./qr-solver.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./qr-solver.component.scss",
})
export class QrSolverComponent {
	
}
