import {Project, ProjectChipType} from "../projects/datatypes";


// Routes have to be edited in src/app/projects/projects.routes.ts
export const BLOG_POSTS: Project[] = [
	{
		tag: "r2d2/two-wheeled-movement",
		name: "Simulating two wheeled movement",
		description: "Simulating the movement of a R2D2-like robot",
		image: "",
		chips: [
			{
				name: "R2D2 - Digital Twin",
				type: ProjectChipType.PARENT_PROJECT,
			},
			{
				name: "Unity",
				type: ProjectChipType.TOOL
			}
		],
	},
];