import {Component} from "@angular/core";
import {ImageContentLayoutComponent} from "../../../shared/components/image-content-layout/image-content-layout.component";
import {ImageWrapperComponent} from "../../../shared/components/image-wrapper/image-wrapper.component";
import {MathContentComponent} from "../../../shared/components/math-content/math-content.component";

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
	`;
	formula_angle_result = `
		$$
		\\begin{align}
			\\alpha_{rad}&=\\frac{\\text{r_dist}-\\text{l_dist}}{\\text{l_space}+\\text{r_space}}\\\\
			\\alpha_{deg}&=\\frac{\\text{r_dist}-\\text{l_dist}}{\\text{l_space}+\\text{r_space}}*\\frac{360}{2\\pi}
		\\end{align}
		$$
	`;
	
	formula_closest_point = `
	$$
	\\vec F_g=\\frac{ \\vec b \\cdot \\vec n_2 - \\vec a \\cdot \\vec n_2 }{ \\vec v \\cdot \\vec n_2 } \\vec v + \\vec a \\quad \\text{ using: } \\quad  \\vec n_2 = \\vec w \\times (\\vec v \\times \\vec w)
	$$
	`;
	
}
