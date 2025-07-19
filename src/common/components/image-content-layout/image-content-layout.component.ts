import {CommonModule} from "@angular/common";
import {Component, Input} from "@angular/core";
import {ImageWrapperComponent} from "../image-wrapper/image-wrapper.component";

export type LayoutRatio = "2img-1text" | "50-50" | "1img-2text";
export type ImagePosition = "left" | "right";

@Component({
	selector: "app-image-content-layout",
	imports: [CommonModule, ImageWrapperComponent],
	templateUrl: "./image-content-layout.component.html",
	styleUrl: "./image-content-layout.component.scss",
})
export class ImageContentLayoutComponent {
	@Input() imageSrc: string = "";
	@Input() imageAlt: string = "";
	@Input() imageHeight: string = "400px";
	@Input() imageObjectFit: string = "cover";
	@Input() ratio: LayoutRatio = "50-50";
	@Input() imagePosition: ImagePosition = "left";
	@Input() imageClass: string = "";
	@Input() imageBackgroundColor: string = "transparent";
	
	get containerClasses() {
		return {
			[`ratio-${ this.ratio }`]: true,
			[`image-${ this.imagePosition }`]: true,
		};
	}
	
	get imageSectionClasses() {
		return {
			"image-section": true,
		};
	}
	
	get contentSectionClasses() {
		return {
			"content-section": true,
		};
	}
}