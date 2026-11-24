import {Project, ProjectChipType} from "../projects/datatypes";


// Routes have to be edited in src/app/projects/projects.routes.ts
export const BLOG_POSTS: Project[] = [
	{
		tag: "sdc/what-is-this",
		name: "SDC — What is this?",
		description: "A field guide to IEEE 11073 SDC: what problem it solves for networked medical devices, and how BICEPS, MDPWS and discovery fit together.",
		image: "/blog/sdc/what-is-this/cover.svg",
		date: new Date("2026-08-27"),
		chips: [
			{
				name: "Medical Devices",
				type: ProjectChipType.USE_CASE,
			},
			{
				name: "SDC",
				type: ProjectChipType.INTERFACE,
			},
			{
				name: "IEEE 11073",
				type: ProjectChipType.TOOL,
			},
			{
				name: "BICEPS",
				type: ProjectChipType.TOOL,
			},
		],
	},
	{
		tag: "matrix-server",
		name: "Self-hosting a Matrix server",
		description: "Building a self-hosted, bridged Matrix server as a Beeper replacement I actually own.",
		image: "/blog/matrix-server/cover.svg",
		date: new Date("2026-06-11"),
		chips: [
			{
				name: "Self-Hosting",
				type: ProjectChipType.USE_CASE,
			},
			{
				name: "Matrix",
				type: ProjectChipType.INTERFACE,
			},
			{
				name: "Ansible",
				type: ProjectChipType.TOOL,
			},
			{
				name: "Synapse",
				type: ProjectChipType.TOOL,
			},
		],
	},
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