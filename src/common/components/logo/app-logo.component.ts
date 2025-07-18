import {Component, HostBinding} from "@angular/core";

@Component({
    selector: "app-logo",
    imports: [],
    templateUrl: "./app-logo.component.html",
    styleUrl: "./app-logo.component.scss"
})
export class AppLogo {
	@HostBinding("attr.aria-hidden")
	ariaHidden = true;
}
