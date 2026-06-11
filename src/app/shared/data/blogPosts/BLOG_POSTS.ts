import {Project, ProjectChipType} from "../projects/datatypes";


// Routes have to be edited in src/app/projects/projects.routes.ts
export const BLOG_POSTS: Project[] = [
	{
		tag: "r2d2/two-wheeled-movement",
		name: "Simulating two wheeled movement",
		description: "Simulating the movement of a R2D2-like robot",
		image: "/blog/r2d2/two-wheel-movement/cover.png",
		date: new Date("2025-07-019"),
		chips: [
			{
				name: "R2D2",
				type: ProjectChipType.PARENT_PROJECT,
			},
			{
				name: "Digital Twin",
				type: ProjectChipType.USE_CASE,
			},
			{
				name: "Unity",
				type: ProjectChipType.TOOL,
			},
		],
	},
];