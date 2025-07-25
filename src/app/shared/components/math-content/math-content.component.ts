import {CommonModule} from "@angular/common";
import {AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from "@angular/core";
import {NgIcon} from "@ng-icons/core";
import {MathJaxService} from "../../../services/mathjax.service";

@Component({
	selector: "app-math-content",
	standalone: true,
	imports: [CommonModule, NgIcon],
	template: `
		<div class="math-content-wrapper"
			 (mouseenter)="onMouseEnter()"
			 (mouseleave)="onMouseLeave()">
			<div #mathContainer></div>
			<button *ngIf="showCopyButton && enableCopy"
					class="copy-button"
					(click)="copyLatex()"
					title="Copy LaTeX">
				<ng-icon name="matContentCopy" size="16"></ng-icon>
			</button>
		</div>
	`,
	styleUrls: ["./math-content.component.scss"],
})
export class MathContentComponent implements AfterViewInit, OnChanges {
	@Input() content: string = "";
	@Input() enableCopy: boolean = true;
	@ViewChild("mathContainer", {static: true}) mathContainer!: ElementRef;
	
	showCopyButton = false;
	
	constructor(private mathJaxService: MathJaxService) {}
	
	ngAfterViewInit() {
		this.updateContent();
	}
	
	ngOnChanges(changes: SimpleChanges) {
		if(changes["content"] && !changes["content"].firstChange) {
			this.updateContent();
		}
	}
	
	onMouseEnter() {
		this.showCopyButton = true;
	}
	
	onMouseLeave() {
		this.showCopyButton = false;
	}
	
	copyLatex() {
		if(this.content) {
			navigator.clipboard.writeText(this.content).then(() => {
				console.log("LaTeX copied to clipboard");
			}).catch(err => {
				console.error("Failed to copy LaTeX: ", err);
			});
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