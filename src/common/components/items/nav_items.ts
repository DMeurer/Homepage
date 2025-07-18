export interface NavItem {
	name: string;
	summary: string;
}

const ABOUT = "about";
const PROJECTS = "projects";
const BLOG = "blog";

export const SECTIONS: { [key: string]: NavItem } = {
	[PROJECTS]: {
		name: "Projects",
		summary: "Some of the projects I've worked on.",
	},
	[BLOG]: {
		name: "Blog",
		summary: "Articles about stuff I've made.",
	}
	/*
	[ABOUT]: {
		name: "About",
		summary: "A little bit about me.",
	},
	*/
};
