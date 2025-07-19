import {Injectable} from "@angular/core";

declare var MathJax: any;

@Injectable({
	providedIn: "root",
})
export class MathJaxService {
	private mathJaxLoaded = false;
	private loadingPromise: Promise<void> | null = null;
	
	constructor() {
		this.initMathJax();
	}
	
	async renderMath(element: HTMLElement): Promise<void> {
		await this.initMathJax();
		
		if(this.mathJaxLoaded && MathJax && MathJax.typesetPromise) {
			try {
				await MathJax.typesetPromise([element]);
			} catch(error) {
				console.error("MathJax rendering error:", error);
			}
		}
	}
	
	async renderMathContent(content: string): Promise<string> {
		await this.initMathJax();
		return content; // Return the content as-is, MathJax will process it
	}
	
	private initMathJax() {
		if(this.loadingPromise) {
			return this.loadingPromise;
		}
		
		this.loadingPromise = new Promise<void>((resolve) => {
			const checkMathJax = () => {
				if(typeof MathJax !== "undefined" && MathJax.typesetPromise) {
					this.mathJaxLoaded = true;
					resolve();
				} else {
					setTimeout(checkMathJax, 100);
				}
			};
			checkMathJax();
		});
		
		return this.loadingPromise;
	}
}