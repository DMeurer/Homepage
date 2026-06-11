
import {Component, Input, ChangeDetectionStrategy} from "@angular/core";

export interface ChatWindowMessage {
	sender: string;
	text: string;
	timestamp?: string;
}

@Component({
	selector: "app-chat-window",
	imports: [],
	templateUrl: "./chat-window.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./chat-window.component.scss",
})
export class ChatWindowComponent {
	@Input() title: string = "Chat";
	@Input() subtitle?: string;
	@Input() messages: ChatWindowMessage[] = [];
}
