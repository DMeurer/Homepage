import {Routes} from "@angular/router";
import {LandscapeGenComponent} from "./landscape-gen/landscape-gen.component";
import {PrettyPrintDmeurerComponent} from "./pretty-print-dmeurer/pretty-print-dmeurer.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {ImprovedPotatoComponent} from "./improved-potato/improved-potato.component";
import {ProjectsComponent} from "./projects.component";
import {TelegramBotComponent} from "./telegram-bot/telegram-bot.component";
import {WebScraperComponent} from "./web-scraper/web-scraper.component";

export const routes: Routes = [
	{
		pathMatch: "full",
		path: "",
		component: ProjectsComponent,
	},
	{
		path: "calculator",
		component: CalculatorComponent,
	},
	{
		path: "p5js",
		loadChildren: () => import("./p5js/p5js.routes").then((m) => m.routes),
	},
	{
		path: "telegram-bot",
		component: TelegramBotComponent,
	},
	{
		path: "improved-potato",
		component: ImprovedPotatoComponent,
	},
	{
		path: "web-scraper-library",
		component: WebScraperComponent,
	},
	{
		path: "pretty-print-dmeurer",
		component: PrettyPrintDmeurerComponent,
	},
	{
		path: "landscape-generator",
		component: LandscapeGenComponent,
	},
];
