import {Routes} from "@angular/router";
import {BlogComponent} from "./blog.component";
import {R2d2TwoWheeledMovementComponent} from "./r2d2/r2d2-two-wheeled-movement/r2d2-two-wheeled-movement.component";

export const routes: Routes = [
	{
		pathMatch: "full",
		path: "",
		component: BlogComponent,
	},
	{
		path: "r2d2/two-wheeled-movement",
		component: R2d2TwoWheeledMovementComponent,
	}
];
