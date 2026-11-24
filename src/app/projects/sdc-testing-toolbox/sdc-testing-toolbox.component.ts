import {Component, ChangeDetectionStrategy} from "@angular/core";
import {RouterLink} from "@angular/router";
import {CodeBlockComponent} from "../../shared/components/code-block/code-block.component";
import {ImageWrapperComponent} from "../../shared/components/image-wrapper/image-wrapper.component";
import {ProjectLinksComponent} from "../../shared/components/project-links/project-links.component";
import {ProjectLink} from "../../shared/data/projects/datatypes";

@Component({
	selector: "app-sdc-testing-toolbox",
	imports: [CodeBlockComponent, ImageWrapperComponent, ProjectLinksComponent, RouterLink],
	templateUrl: "./sdc-testing-toolbox.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./sdc-testing-toolbox.component.scss",
})
export class SdcTestingToolboxComponent {
	protected readonly links: ProjectLink[] = [
		{label: "GitHub repo", url: "https://github.com/DMeurer/SDC-Testing-Toolbox", icon: "matCode"},
	];

	protected readonly startExample = `py -3.12 -m venv .venv
.venv\\Scripts\\python.exe -m pip install -r requirements.txt

# two devices that can find each other
.venv\\Scripts\\python.exe run_toolbox.py --name monitor --config presets\\patient-monitor.xml
.venv\\Scripts\\python.exe run_toolbox.py --name insufflator --config presets\\insufflator.xml`;
}
