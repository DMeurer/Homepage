import {CommonModule} from "@angular/common";
import {Component, Input} from "@angular/core";

export interface ChatWindowMessage {
	sender: string;
	text: string;
	timestamp?: string;
}

@Component({
	selector: "app-chat-window",
	imports: [CommonModule],
	templateUrl: "./chat-window.component.html",
	styleUrl: "./chat-window.component.scss",
})
export class ChatWindowComponent {
	@Input() title: string = "Chat";
	@Input() subtitle?: string;
	@Input() messages: ChatWindowMessage[] = [];
}
