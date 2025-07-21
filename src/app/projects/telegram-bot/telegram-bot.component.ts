import {AsyncPipe} from "@angular/common";
import {Component} from "@angular/core";
import {CodeBlockComponent} from "../../shared/components/code-block/code-block.component";
import {ImageContentLayoutComponent} from "../../shared/components/image-content-layout/image-content-layout.component";
import {MathContentComponent} from "../../shared/components/math-content/math-content.component";
import {CodeFromUrlPipe} from "../../shared/pipes/code-from-url.pipe";

@Component({
	selector: "app-telegram-bot",
	imports: [
		AsyncPipe,
		CodeBlockComponent,
		CodeFromUrlPipe,
		ImageContentLayoutComponent,
		MathContentComponent,
	],
	templateUrl: "./telegram-bot.component.html",
	styleUrl: "./telegram-bot.component.scss",
})
export class TelegramBotComponent {
	protected codeUrlCronjob = "https://raw.githubusercontent.com/DMeurer/go-telegram-bot/refs/heads/main/deployment/cronjob.sh";
	protected codeUrlCheckUpdates = "https://raw.githubusercontent.com/DMeurer/go-telegram-bot/refs/heads/main/deployment/check-updates.sh";
	protected codeUrlDeploy = "https://raw.githubusercontent.com/DMeurer/go-telegram-bot/refs/heads/main/deployment/deploy.sh";
}
