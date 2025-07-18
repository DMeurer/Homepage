import {AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from "@angular/core";
import {MathJaxService} from "../../../app/services/mathjax.service";

@Component({
	selector: "app-math-content",
	standalone: true,
	template: `
		<div #mathContainer></div>
	`,
})
export class MathContentComponent implements AfterViewInit, OnChanges {
	@Input() content: string = "";
	@ViewChild("mathContainer", {static: true}) mathContainer!: ElementRef;
	
	constructor(private mathJaxService: MathJaxService) {}
	
	ngAfterViewInit() {
		this.updateContent();
	}
	
	ngOnChanges(changes: SimpleChanges) {
		if(changes["content"] && !changes["content"].firstChange) {
			this.updateContent();
		}
	}
	
	private updateContent() {
		if(this.mathContainer) {
			// Set the content directly to the DOM element
			this.mathContainer.nativeElement.innerHTML = this.content;
			this.renderMath();
		}
	}
	
	private async renderMath() {
		try {
			await this.mathJaxService.renderMath(this.mathContainer.nativeElement);
		} catch(error) {
			console.error("Error rendering math:", error);
		}
	}
}