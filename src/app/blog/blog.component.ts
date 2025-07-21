import {Component} from "@angular/core";
import {ProjectCardComponent} from "../shared/components/project-card/project-card.component";
import {BLOG_POSTS} from "../shared/data/blogPosts/BLOG_POSTS";

@Component({
	selector: "app-blog",
	imports: [
		ProjectCardComponent,
	],
	templateUrl: "./blog.component.html",
	styleUrl: "./blog.component.scss",
})
export class BlogComponent {
	
	protected readonly BLOG_POSTS = BLOG_POSTS;
}
