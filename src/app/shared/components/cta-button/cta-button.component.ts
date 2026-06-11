import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {NgIcon} from "@ng-icons/core";

@Component({
	selector: "app-cta-button",
	imports: [NgIcon],
	templateUrl: "./cta-button.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./cta-button.component.scss",
})
export class CtaButtonComponent {
	@Input() href: string = "";
	@Input() label: string = "Check it out";
	/** Name of a registered ng-icon, or empty string to hide the icon. */
	@Input() icon: string = "matOpenInNew";
	/** Opens the link in a new tab with rel="noopener" when true. */
	@Input() external: boolean = true;
}
