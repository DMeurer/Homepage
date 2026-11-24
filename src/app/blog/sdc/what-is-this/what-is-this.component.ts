import {Component, ChangeDetectionStrategy} from "@angular/core";
import {RouterLink} from "@angular/router";
import {ImageWrapperComponent} from "../../../shared/components/image-wrapper/image-wrapper.component";

@Component({
	selector: "app-sdc-what-is-this",
	imports: [ImageWrapperComponent, RouterLink],
	templateUrl: "./what-is-this.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./what-is-this.component.scss",
})
export class SdcWhatIsThisComponent {}
