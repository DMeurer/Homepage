import {NgTemplateOutlet} from "@angular/common";
import {Component, OnDestroy} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";

import {Subscription} from "rxjs";
import {SECTIONS} from "../items/nav_items";
import {AppLogo} from "../logo/app-logo.component";

const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
	selector: "nav-bar",
	imports: [
		MatButtonModule,
		RouterLink,
		RouterLinkActive,
		AppLogo,
		NgTemplateOutlet,
	],
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.scss",
})

export class NavbarComponent implements OnDestroy {
	private subscriptions = new Subscription();
	
	get sections() {
		return SECTIONS;
	}
	
	get sectionKeys() {
		return SECTIONS_KEYS;
	}
	
	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}
}
