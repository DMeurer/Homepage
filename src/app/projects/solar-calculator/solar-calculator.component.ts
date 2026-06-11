import {Component, ChangeDetectionStrategy} from "@angular/core";
import {CodeBlockComponent} from "../../shared/components/code-block/code-block.component";
import {CtaButtonComponent} from "../../shared/components/cta-button/cta-button.component";
import {ImageWrapperComponent} from "../../shared/components/image-wrapper/image-wrapper.component";
import {ProjectLinksComponent} from "../../shared/components/project-links/project-links.component";
import {ProjectLink} from "../../shared/data/projects/datatypes";

@Component({
	selector: "app-solar-calculator",
	imports: [CodeBlockComponent, CtaButtonComponent, ProjectLinksComponent, ImageWrapperComponent],
	templateUrl: "./solar-calculator.component.html",
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: "./solar-calculator.component.scss",
})
export class SolarCalculatorComponent {
	protected readonly links: ProjectLink[] = [
		{label: "Live page", url: "https://solar.d-meurer.com", icon: "matOpenInNew"},
		{label: "GitHub repo", url: "https://github.com/DMeurer/solar-configurator", icon: "matCode"},
	];

	protected readonly solarExample = `// A Gaussian curve fitted between sunrise and sunset
const sigma = (peakMinute - sunriseMinute) / 3;

for (let t = 0; t < 1440; t++) {
  if (t < sunriseMinute || t > sunsetMinute) {
    points.push({minute: t, watts: 0});
    continue;
  }
  const base = peakWatts *
    Math.exp(-((t - peakMinute) ** 2) / (2 * sigma ** 2));
  // weatherScale + cloud dips shape the curve, inverterLimit caps it
  const watts = Math.min(inverterLimit, base * weatherScale * dipFactor);
  points.push({minute: t, watts: Math.max(0, watts)});
}`;

	protected readonly batteryExample = `let soc = capacityWh * (initialSocPct / 100);

for (let t = 0; t < 1440; t++) {
  const net = solar[t].watts - consumption[t].watts;

  if (net > 0) {
    // surplus: charge the battery first, export what is left
    const canCharge = Math.min(net, maxChargeW, (capacityWh - soc) * 60);
    soc += canCharge * eff / 60;
    gridExport = net - canCharge;
  } else if (net < 0) {
    // deficit: discharge the battery first, import the rest
    const canDischarge = Math.min(-net, maxDischargeW, soc * 60);
    soc -= canDischarge / 60;
    gridImport = -net - canDischarge;
  }
}`;

	protected readonly shareExample = `// The whole setup is squeezed into one ?c= query parameter
function serializeConfig(config: ConfigSnapshot): string {
  return btoa(encodeURIComponent(JSON.stringify({v: 1, ...config})));
}

function buildShareUrl(config: ConfigSnapshot): string {
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("c", serializeConfig(config));
  return url.toString();
}`;
}
