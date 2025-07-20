import {Component} from "@angular/core";
import {BLOG_POSTS} from "../shared/data/blogPosts/BLOG_POSTS";
import {ProjectCardComponent} from "../shared/components/project-card/project-card.component";

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
