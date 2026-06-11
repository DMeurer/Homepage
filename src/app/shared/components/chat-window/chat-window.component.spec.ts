import {ComponentFixture, TestBed} from "@angular/core/testing";

import {ChatWindowComponent} from "./chat-window.component";

describe("ChatWindowComponent", () => {
	let component: ChatWindowComponent;
	let fixture: ComponentFixture<ChatWindowComponent>;

	beforeEach(async() => {
		await TestBed.configureTestingModule({
			imports: [ChatWindowComponent],
		})
			.compileComponents();

		fixture = TestBed.createComponent(ChatWindowComponent);
		component = fixture.componentInstance;
		component.messages = [
			{sender: "Alex", text: "Can we track the hackathon page?"},
			{sender: "Dominik", text: "alerts create test https://example.com .title innerText '0 */2 * * *'", timestamp: "10:02"},
		];
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
