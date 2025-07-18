import {NgOptimizedImage} from "@angular/common";
import { Component } from '@angular/core';
import {ImageContentLayoutComponent} from "../../../../common/components/image-content-layout/image-content-layout";
import {ImageWrapperComponent} from "../../../../common/components/image-wrapper/image-wrapper.component";
import {MathContentComponent} from "../../../../common/components/math-content/math-content.component";

@Component({
  selector: 'app-r2d2-two-wheeled-movement',
  standalone: true,
	imports: [
		NgOptimizedImage,
		ImageWrapperComponent,
		ImageContentLayoutComponent,
		MathContentComponent,
	
	],
  templateUrl: './r2d2-two-wheeled-movement.component.html',
  styleUrl: './r2d2-two-wheeled-movement.component.scss'
})
export class R2d2TwoWheeledMovementComponent {
	formula_angle = `
		$\\frac{\\text{r_dist}-\\text{l_dist}}{\\text{l_space}+\\text{r_space}}=\\alpha$
	`

}
