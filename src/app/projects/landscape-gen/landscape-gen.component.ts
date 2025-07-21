import { Component } from '@angular/core';
import {ImageContentLayoutComponent} from "../../shared/components/image-content-layout/image-content-layout.component";
import {ImageWrapperComponent} from "../../shared/components/image-wrapper/image-wrapper.component";

@Component({
  selector: 'app-landscape-gen',
	imports: [
		ImageWrapperComponent,
		ImageContentLayoutComponent,
	],
  templateUrl: './landscape-gen.component.html',
  styleUrl: './landscape-gen.component.scss'
})
export class LandscapeGenComponent {

}
