
import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {NgIcon} from "@ng-icons/core";
import {Highlight} from "ngx-highlightjs";
import {HighlightLineNumbers} from "ngx-highlightjs/line-numbers";

@Component({
	selector: "app-code-block",
	standalone: true,
	imports: [Highlight, HighlightLineNumbers, NgIcon],
	templateUrl: "./code-block.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrls: ["./code-block.component.scss"],
})
export class CodeBlockComponent {
	@Input() code: string = "";
	@Input() language: string = "text";
	@Input() fileName?: string;
	@Input() showLineNumbers: boolean = true;
	
	wrapLines: boolean = true;
	
	toggleWrap(): void {
		this.wrapLines = !this.wrapLines;
	}
	
	copyCode(): void {
		if(this.code) {
			navigator.clipboard.writeText(this.code).then(() => {
				// Could add a toast notification here in the future
			}).catch(err => {
				console.error("Failed to copy code: ", err);
			});
		}
	}
}