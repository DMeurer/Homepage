import {Component} from "@angular/core";
import {ImageContentLayoutComponent} from "../../../../common/components/image-content-layout/image-content-layout.component";
import {ImageWrapperComponent} from "../../../../common/components/image-wrapper/image-wrapper.component";
import {MathContentComponent} from "../../../../common/components/math-content/math-content.component";

@Component({
	selector: "app-r2d2-two-wheeled-movement",
	imports: [
		ImageWrapperComponent,
		ImageContentLayoutComponent,
		MathContentComponent,
	],
	templateUrl: "./r2d2-two-wheeled-movement.component.html",
	styleUrl: "./r2d2-two-wheeled-movement.component.scss",
})
export class R2d2TwoWheeledMovementComponent {
	formula_angle_known = `
		$$
		\\begin{align}
			\t\\frac{\\text{l_dist}}{r_l}&=\\alpha\\\\
			\t\\frac{\\text{r_dist}}{r_r}&=\\alpha\\\\
			\t|r_l-r_{r}| &= \\text{wheelspacing}\\\\
		\\end{align}
		$$
	`
	formula_angle_result = `
		$$
		\\begin{align}
			\\alpha_{rad}&=\\frac{\\text{r_dist}-\\text{l_dist}}{\\text{l_space}+\\text{r_space}}\\\\
			\\alpha_{deg}&=\\frac{\\text{r_dist}-\\text{l_dist}}{\\text{l_space}+\\text{r_space}}*\\frac{360}{2\\pi}
		\\end{align}
		$$
	`;
	
}
