import {AsyncPipe} from "@angular/common";
import {Component} from "@angular/core";
import {Highlight} from "ngx-highlightjs";
import {HighlightLineNumbers} from "ngx-highlightjs/line-numbers";
import {HighlightPlusModule} from "ngx-highlightjs/plus";

@Component({
	selector: "app-telegram-bot",
	imports: [
		HighlightLineNumbers,
		Highlight,
		HighlightPlusModule,
		AsyncPipe,
	],
	templateUrl: "./telegram-bot.component.html",
	styleUrl: "./telegram-bot.component.scss",
})
export class TelegramBotComponent {
	protected codeUrlCronjob = "https://raw.githubusercontent.com/DMeurer/go-telegram-bot/refs/heads/main/deployment/cronjob.sh";
	protected codeUrlCheckUpdates = "https://raw.githubusercontent.com/DMeurer/go-telegram-bot/refs/heads/main/deployment/check-updates.sh";
	protected codeUrlDeploy = "https://raw.githubusercontent.com/DMeurer/go-telegram-bot/refs/heads/main/deployment/deploy.sh";
}
