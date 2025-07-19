import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {provideRouter} from "@angular/router";
import {provideHighlightOptions} from "ngx-highlightjs";

import {routes} from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideAnimationsAsync(),
		provideHighlightOptions({
			lineNumbersLoader: () => import("ngx-highlightjs/line-numbers"),
			coreLibraryLoader: () => import("highlight.js/lib/core"),
			/* This would only load the languages you need, reducing bundle size.
			languages: {
				typescript: () => import("highlight.js/lib/languages/typescript"),
				css: () => import("highlight.js/lib/languages/css"),
				xml: () => import("highlight.js/lib/languages/xml"),
			},
			 */
			themePath: "assets/styles/androidstudio.css",
			// themePath: "assets/styles/github-dark.css",
		}),
	],
};
