import {Component, ChangeDetectionStrategy} from "@angular/core";
import {CodeBlockComponent} from "../../shared/components/code-block/code-block.component";

@Component({
	selector: "app-jobportal",
	imports: [CodeBlockComponent],
	templateUrl: "./jobportal.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./jobportal.component.scss",
})
export class JobportalComponent {
	protected readonly composeExample = `services:
  postgres:    # PostgreSQL - stores companies, jobs and daily snapshots
  backend:     # FastAPI - the REST API, port 8000
  frontend:    # Angular dashboard, port 4200
  runners:     # Python scrapers, run on a cron schedule`;

	protected readonly envExample = `# The four fixed API keys, each with different permissions
API_KEY_ADMIN=...       # everything
API_KEY_WEBSCRAPER=...  # read + write (used by the runners)
API_KEY_FULLREAD=...    # read + read_hidden (sees private companies)
API_KEY_FRONTEND=...    # read only, no hidden companies`;

	protected readonly apiExample = `# New software positions that showed up at Karl Storz today
curl -H "X-API-Key: $FRONTEND_KEY" \\
  "http://localhost:8000/api/jobs?company_name=KarlStorz\\
&found_on_date=today&job_status=new&title_contains=Software"

# Open-position statistics that feed the dashboard chart
curl -H "X-API-Key: $FRONTEND_KEY" \\
  "http://localhost:8000/api/jobs?statistics=true"`;
}
