import {Component, ChangeDetectionStrategy} from "@angular/core";
import {CodeBlockComponent} from "../../shared/components/code-block/code-block.component";
import {ChatWindowComponent} from "../../shared/components/chat-window/chat-window.component";
import {ProjectLinksComponent} from "../../shared/components/project-links/project-links.component";
import {ProjectLink} from "../../shared/data/projects/datatypes";

@Component({
	selector: "app-matrix-bot",
	imports: [ChatWindowComponent, CodeBlockComponent, ProjectLinksComponent],
	templateUrl: "./matrix-bot.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./matrix-bot.component.scss",
})
export class MatrixBotComponent {
	
	protected readonly links: ProjectLink[] = [
		{label: "Start Chatting", url: "https://matrix.to/#/@melo:dmeurer.dev", icon: "matOpenInNew"},
		{label: "Repository", url: "https://github.com/DMeurer/Matrix-Bot", icon: "matCode"},
	];
	
	protected readonly alertMessages = [
		{
			sender: "User",
			text: `alerts create "Hackathon" https://www.blackforesthackathon.de/smartxautomation-2026/ "a.sign-up-button > div:nth-child(2)" innerText "0 */2 * * *"`,
			timestamp: "10:02",
		},
		{
			sender: "Matrix Bot",
			text: "✅ Alert \"Hackathon\" erstellt.\n\nAlert Hackathon changed\n\nOld: –\nNew: COMING SOON",
			timestamp: "10:02",
		},
		{
			sender: "Matrix Bot",
			text: "Alert Hackathon changed\n\nOld: COMING SOON\nNew: CHECK IT OUT",
			timestamp: "14:00",
		},
	];

	protected readonly envExample = `MATRIX_HOMESERVER=https://matrix.example.com
MATRIX_USERNAME=@bot:example.com
MATRIX_PASSWORD=your-password

# Optional - defaults to the local part of MATRIX_USERNAME
BOT_NAME=bot

# Comma-separated list of Matrix IDs that always have full access
ADMIN_USERS=@you:example.com,@other:example.com

# Template for change notifications - all placeholders are optional
ALERT_TEMPLATE=Alert {name} changed\\n\\nOld: {old}\\nNew: {new}

# Log level
RUST_LOG=info,matrix_sdk_crypto=error`;

	protected readonly cronExample = `* * * * * sh /opt/matrix-bot/deployment/cronjob.sh`;
	protected readonly deploymentExample = `docker compose up -d`;
}
