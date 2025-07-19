import {Component} from "@angular/core";
import {ProjectCardComponent} from "../../common/components/project-card/project-card.component";
import {BLOG_POSTS} from "../../common/data/blogPosts/BLOG_POSTS";

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
