import {provideHttpClient, withFetch} from "@angular/common/http";
import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {provideRouter} from "@angular/router";
import {provideHighlightOptions} from "ngx-highlightjs";
import {provideGistOptions} from "ngx-highlightjs/plus";
import {provideIcons} from "@ng-icons/core";
import {matWrapText, matContentCopy, matFullscreen, matClose} from "@ng-icons/material-icons/baseline";

import {routes} from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(withFetch()),
		provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideAnimationsAsync(),
		provideHighlightOptions({
			fullLibraryLoader: () => import("highlight.js"),
			lineNumbersLoader: () => import("ngx-highlightjs/line-numbers"),
		}),
		provideGistOptions({
			clientId: "",
			clientSecret: "",
		}),
		provideIcons({matWrapText, matContentCopy, matFullscreen, matClose}),
	],
};
