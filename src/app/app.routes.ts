import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "projects",
		loadChildren: () => import("./projects/projects.routes").then((m) => m.routes),
	},
	{
		path: "blog",
		loadChildren: () => import("./blog/blog.routes").then((m) => m.routes),
	},
];
