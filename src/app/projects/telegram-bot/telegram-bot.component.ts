import {Component} from "@angular/core";
import {Highlight} from "ngx-highlightjs";
import {HighlightLineNumbers} from "ngx-highlightjs/line-numbers";

@Component({
	selector: "app-telegram-bot",
	imports: [
		Highlight,
		HighlightLineNumbers,
	],
	templateUrl: "./telegram-bot.component.html",
	styleUrl: "./telegram-bot.component.scss",
})
export class TelegramBotComponent {
	protected code = "import { Injectable } from '@angular/core';"
}
