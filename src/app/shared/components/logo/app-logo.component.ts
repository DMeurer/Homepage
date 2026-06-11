import {Component, HostBinding, ChangeDetectionStrategy} from "@angular/core";

@Component({
	selector: "app-logo",
	imports: [],
	templateUrl: "./app-logo.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./app-logo.component.scss",
})
export class AppLogo {
	@HostBinding("attr.aria-hidden")
	ariaHidden = true;
}
