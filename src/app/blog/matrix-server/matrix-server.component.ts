import {Component, ChangeDetectionStrategy} from "@angular/core";
import {RouterLink} from "@angular/router";
import {ChatWindowComponent} from "../../shared/components/chat-window/chat-window.component";
import {CodeBlockComponent} from "../../shared/components/code-block/code-block.component";

@Component({
	selector: "app-matrix-server",
	imports: [CodeBlockComponent, RouterLink, ChatWindowComponent],
	templateUrl: "./matrix-server.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./matrix-server.component.scss",
})
export class MatrixServerComponent {
	protected readonly coreExample = `matrix_domain: dmeurer.dev
matrix_homeserver_implementation: synapse

# The playbook runs its own Traefik and fetches SSL certs on demand
matrix_playbook_reverse_proxy_type: playbook-managed-traefik

# Secrets live in this file too - redacted here, they don't belong in a blog post
matrix_homeserver_generic_secret_key: "..."
postgres_connection_password: "..."`;

	protected readonly bridgesExample = `# Encrypt the bridged rooms, and enable double puppeting
matrix_bridges_encryption_enabled: true
matrix_appservice_double_puppet_enabled: true

# Every network I want to pull into Matrix is one boolean
matrix_mautrix_whatsapp_enabled: true
matrix_mautrix_signal_enabled: true
matrix_mautrix_telegram_enabled: true
matrix_mautrix_discord_enabled: true
matrix_mautrix_meta_instagram_enabled: true
matrix_mautrix_gmessages_enabled: true
matrix_beeper_linkedin_enabled: true
matrix_steam_bridge_enabled: true`;

	protected readonly monitoringExample = `# Prometheus exporters scrape the host, Postgres and Synapse
prometheus_enabled: true
prometheus_node_exporter_enabled: true
prometheus_postgres_exporter_enabled: true
matrix_synapse_usage_exporter_enabled: true

# Grafana turns all of that into dashboards I can actually read
grafana_enabled: true
grafana_hostname: grafana.dmeurer.dev`;
	
	
	protected readonly mensaMessages = [
		{
			sender: "Alice",
			text: `melo mensa`,
			timestamp: "10:02",
		},
		{
			sender: "Dominik Meurer",
			text: "Melo 🤖 (Matrix):\nMensa Furtwangen\n\nBurger with french fries and a salad",
			timestamp: "10:02",
		},
		{
			sender: "Bob",
			text: "Woah nice lets go 11:15",
			timestamp: "11:00",
		},
	];
}
