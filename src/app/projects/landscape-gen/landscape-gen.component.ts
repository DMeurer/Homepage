import {Component, ChangeDetectionStrategy} from "@angular/core";
import {ImageContentLayoutComponent} from "../../shared/components/image-content-layout/image-content-layout.component";
import {ImageWrapperComponent} from "../../shared/components/image-wrapper/image-wrapper.component";
import {ProjectLinksComponent} from "../../shared/components/project-links/project-links.component";
import {ProjectLink} from "../../shared/data/projects/datatypes";

@Component({
	selector: "app-landscape-gen",
	imports: [
		ImageWrapperComponent,
		ImageContentLayoutComponent,
		ProjectLinksComponent,
	],
	templateUrl: "./landscape-gen.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./landscape-gen.component.scss",
})
export class LandscapeGenComponent {
	
	protected readonly links: ProjectLink[] = [
		{label: "Repository", url: "https://github.com/DMeurer/go-telegram-bot", icon: "matCode"},
	];
	
}
